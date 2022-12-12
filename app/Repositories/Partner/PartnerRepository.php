<?php

namespace App\Repositories\Partner;

use App\Models\Partner;
use App\Models\UserSettingScreen;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PartnerRepository implements PartnerRepositoryInterface
{

    use ApiResponser;

    private $model;
    public function __construct(Partner $model)
    {
        $this->model = $model;

    }

    public function getAllPartners($request)
    {
        $models = $this->model->where(function ($q) use ($request) {
            $this->model->scopeFilter($q , $request);
        })->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');;

        return ['data' => $models->paginate($request->per_page), 'paginate' => true];

    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {

        DB::transaction(function () use ($request) {
            $data = $request;
            $data['password'] = Hash::make($data['password']);
            $this->model->create($data);
            cacheForget("Partners");
        });

        return $this->successResponse([],__('Done'));
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $data = $request;
            if (isset($data['password'])) {
                $data['password'] = Hash::make($data['password']);
            }
            $this->model->where("id", $id)->update($data);
            $this->forget($id);

        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }


    public function setting($request)
    {
        DB::transaction(function () use ($request) {
            $screenSetting = UserSettingScreen::where('user_id',$request['user_id'])->where('screen_id',$request['screen_id'])->first();
            $request['data_json'] =json_encode($request['data_json']);
            if (!$screenSetting) {
                UserSettingScreen::create($request);
            } else {
                $screenSetting->update($request);
            }
        });
        return $this->successResponse([],__('Done'));
    }


    public function getSetting($user_id, $screen_id)
    {
        return  UserSettingScreen::where('user_id',$user_id)->where('screen_id',$screen_id)->first();
    }


    private function forget($id)
    {
        $keys = [
            "Partners",
            "Partners_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
