<?php

namespace App\Repositories\ScreenDocumentType;

use App\Models\Partner;
use App\Models\ScreenDocumentType;
use App\Models\UserSettingScreen;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ScreenDocumentTypeRepository implements ScreenDocumentTypeRepositoryInterface
{

    use ApiResponser;

    private $model;
    public function __construct(ScreenDocumentType $model)
    {
        $this->model = $model;
    }

    public function all($request)
    {
        $models = $this->model->where(function ($q) use ($request) {
            $this->model->scopeFilter($q, $request);
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
            $this->model->create($data);
            cacheForget("ScreenDocumentType");
        });

        return $this->successResponse([], __('Done'));
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $data = $request;
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

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }


    private function forget($id)
    {
        $keys = [
            "ScreenDocumentType",
            "ScreenDocumentType_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }
    }
}
