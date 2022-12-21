<?php

namespace App\Repositories\WorkflowTree;

use App\Models\WorkflowTree;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class WorkflowTreeRepository implements WorkflowTreeRepositoryInterface
{

    public function __construct(private WorkflowTree $model, private Media $media)
    {
        $this->model = $model;
        $this->media = $media;
    }

    public function all($request)
    {
        $models = $this->model->filter($request)->latest();

        return ['data' => $models->with(["partner","company","module","screen"])->paginate($request->per_page), 'paginate' => true];
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {
            $model =  $this->model->create($request);

            $this->media::where('id', $request->media)->update([
                'model_id' => $model->id,
                'model_type' => get_class($this->model),
            ]);

            cacheForget("work_flow_trees");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $model = $this->model->where("id", $id)->first();
            if ($request->media) {
                $this->media::where('id', $model->media[0]->id)->delete();
                $this->media::where('id', $request->media)->update([
                    'model_id' => $model->id,
                    'model_type' => get_class($this->model),
                ]);
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

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    public function getRootNodes()
    {
        return $this->model->whereNull("parent_id")->get();
    }
    public function getChildNodes($parentId)
    {
        return $this->model->where("parent_id", $parentId)->get();
    }
    
    private function forget($id)
    {
        $keys = [
            "work_flow_trees",
            "work_flow_trees_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }
    }
}
