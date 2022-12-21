<?php

namespace App\Repositories\DocumentType;

use App\Models\DocumentType;
use App\Models\UserSettingScreen;
use Illuminate\Support\Facades\DB;

class DocumentTypeRepository implements DocumentTypeInterface
{

    public function __construct(private DocumentType $model){}

    public function all($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {
            $this->model->create($request->all());
            cacheForget("documentTypes");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $this->model->where("id", $id)->update($request->all());
            $this->forget($id);
        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }

    private function forget($id)
    {
        $keys = [
            "documentTypes",
            "documentTypes_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }
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



    public function logs($id)
{
    return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
}


}
