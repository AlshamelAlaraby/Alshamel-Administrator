<?php

namespace App\Repositories\Screen;

use App\Models\Screen;
use Illuminate\Support\Facades\DB;
class ScreenRepository implements ScreenRepositoryInterface
{

    private $model;
    public function __construct(Screen $model)
    {
        $this->model = $model;
    }

    public function getAllScreens($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('name_e', 'like', '%' . $request->search . '%')
                    ->orWhere('title', 'like', '%' . $request->search . '%')
                    ->orWhere('title_e', 'like', '%' . $request->search . '%');
            }

            if ($request->serial_id) {
                $q->where('serial_id', $request->serial_id);
            }

        })->latest();

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
            cacheForget("Screens");
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
            "Screens",
            "Screens_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
