<?php


namespace App\Repositories\Company;

use App\Models\Company;
use App\Models\UserSettingScreen;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class CompanyRepository implements CompanyRepositoryInterface
{
    use ApiResponser;

    public $model;
    public function __construct(Company $model, Media $media)
    {
        $this->model = $model;
        $this->media = $media;
    }

    public function getAllCompanies($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function create($request)
    {


        DB::transaction(function () use ($request) {
            $model =  $this->model->create($request);

            if ($request->media) {
                foreach ($request->media as $media) {
                    $this->media::where('id', $media)->update([
                        'model_id' => $model->id,
                        'model_type' => get_class($this->model),
                    ]);
                }
            }
            cacheForget("company");
        });

        return $this->successResponse([], __('created'));
    }

    public function show($id)
    {
        return $this->model->find($id);
    }

    public function update($request, $id)
    {

        DB::transaction(function () use ($id, $request) {
            $model = $this->model->find($id)->update($request);
            if ($request->media && !$request->old_media) { // if there is new media and no old media
                $model->clearMediaCollection('media');
                foreach ($request->media as $media) {
                    uploadImage($media, [
                        'model_id' => $model->id,
                        'model_type' => get_class($this->model),
                    ]);
                }
            }

            if ($request->old_media && !$request->media) { // if there is old media and no new media
                $model->media->whereNotIn('id', $request->old_media)->each(function (Media $media) {
                    $media->delete();
                });
            }

            if ($request->old_media && $request->media) { // if there is old media and new media
                $model->media->whereNotIn('id', $request->old_media)->each(function (Media $media) {
                    $media->delete();
                });
                foreach ($request->media as $image) {
                    uploadImage($image, [
                        'model_id' => $model->id,
                        'model_type' => get_class($this->model),
                    ]);
                }
            }


            if (!$request->old_media && !$request->media) { // if this is no old media and new media
                $model->clearMediaCollection('media');
            }

            if ($request->is_default == 1) {
                $this->model->where('id', '!=', $id)->update(['is_default' => 0]);
            }
            $this->forget($id);
        });

        return $this->successResponse([], __('created'));
    }

    public function destroy($id)
    {

        $model = $this->model->find($id);
        $this->forget($id);
        $model->delete();
    }


    public function setting($request)
    {
        DB::transaction(function () use ($request) {
            $screenSetting = UserSettingScreen::where('user_id', $request['user_id'])->where('screen_id', $request['screen_id'])->first();
            $request['data_json'] = json_encode($request['data_json']);
            if (!$screenSetting) {
                UserSettingScreen::create($request);
            } else {
                $screenSetting->update($request);
            }
        });
    }

    public function getSetting($user_id, $screen_id)
    {
        return  UserSettingScreen::where('user_id', $user_id)->where('screen_id', $screen_id)->first();
    }

    public function companyModules($request)
    {
        return $this->model->filterCompanyModules($request)->get();
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }
    private function forget($id)
    {
        $keys = [
            "company",
            "company_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }
    }
}
