<?php

namespace App\Repositories\Hotfield;

use App\Models\Hotfield;
use Illuminate\Support\Facades\DB;
class HotfieldRepository implements HotfieldRepositoryInterface
{

    private $model;
    public function __construct(Hotfield $model)
    {
        $this->model = $model;
    }

    public function getAllHotfields($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('name_e', 'like', '%' . $request->search . '%');
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
            cacheForget("Hotfields");
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
            "Hotfields",
            "Hotfields_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
