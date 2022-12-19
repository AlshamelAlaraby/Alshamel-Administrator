<?php

namespace App\Repositories\ScreenButton;

use App\Models\ScreenButton;
use Illuminate\Support\Facades\DB;
class ScreenButtonRepository implements ScreenButtonRepositoryInterface
{

    private $model;
    public function __construct(ScreenButton $model)
    {
        $this->model = $model;
    }

    public function getAllScreenButtons($request)
    {
        $models = $this->model;

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
            $this->model->create($request);
            cacheForget("ScreenButtons");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $this->model->where("id", $id)->update($request);
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
            "ScreenButtons",
            "ScreenButtons_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
