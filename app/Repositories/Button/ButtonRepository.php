<?php

namespace App\Repositories\Button;

use App\Models\Button;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ButtonRepository implements ButtonRepositoryInterface
{

    public function __construct(private Button $model, private Media $media)
    {
        $this->model = $model;
        $this->media = $media;
    }

    public function getAllButtons($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }
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

            $model = $this->model->create($request);
            $this->media::where('id', $request->media)->update([
                'model_id' => $model->id,
                'model_type' => get_class($this->model),
            ]);
            cacheForget("Buttons");
        });
    }
    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $model = $this->model->find($id);
            $model->update($request);
            if ($request->media) {
                $this->media::where('id', $model->media[0]->id)->delete();
                $this->media::where('id', $request->media)->update([
                    'model_id' => $model->id,
                    'model_type' => get_class($this->model),
                ]);
            }
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
