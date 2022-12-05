<?php

namespace App\Repositories\Button;

use App\Models\Button;
use Illuminate\Support\Facades\DB;
class ButtonRepository implements ButtonRepositoryInterface
{

    private $model;
    public function __construct(Button $model)
    {
        $this->model = $model;
    }

    public function getAllButtons($request)
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
            if (isset($request['icon'] )) {
                $request['icon'] = uploadFile($request['icon'], config('paths.BUTTON_PATH'));
            }
            $this->model->create($request);
            cacheForget("Buttons");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
           $resource =  $this->model->where("id", $id)->update($request);
           $model = $this->model->find($id);
            if(isset($request['icon'])){
                if($model->icon){
                    $path = $model->icon? public_path($model->icon) : null;
                    if(file_exists($path)){
                        unlink($path);
                    }
                }
                $request['icon'] = uploadFile($request['icon'], config('paths.BUTTON_PATH'));
            }
            $model->update($request);
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
            "Buttons",
            "Buttons_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
