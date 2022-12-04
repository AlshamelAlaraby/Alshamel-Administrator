<?php

namespace App\Repositories\WorkflowTree;

use App\Models\WorkflowTree;
use Illuminate\Support\Facades\DB;
class WorkflowTreeRepository implements WorkflowTreeRepositoryInterface
{

    private $model;
    public function __construct(WorkflowTree $model)
    {
        $this->model = $model;
    }

    public function getAllWorkflowTrees($request)
    {
        $models = $this->model->where(function ($q) use ($request) {
            $this->filter($request , $q);
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

            if (isset($request['icon_url'] )) {
                $request['icon_url'] = uploadFile($request['icon_url'], config('paths.WORKFLOW_TREE_PATH'));
            }
            $this->model->create($request);
            cacheForget("WorkflowTrees");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $resource = $this->model->where("id", $id)->first();
            if(isset($request['icon_url'])){
                if($resource->icon_url){
                    $path = $resource->icon_url? public_path($resource->icon_url) : null;
                    if(file_exists($path)){
                        unlink($path);
                    }
                }
                $request['icon_url'] = uploadFile($request['icon_url'], config('paths.WORKFLOW_TREE_PATH'));
            }
            $resource->update($request);
            $this->forget($id);

        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }



    /**
     * this function used to make filter of query
     * @param $request key of filter
     * @param $q object of query
     * @return filter query
     */
    private function filter($request ,$q)
    {
        if ($request->search) {
          return  $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('name_e', 'like', '%' . $request->search . '%');
        }

        if ($request->is_active) {
            $q->where('is_active', $request->is_active);
        }

        if ($request->parent_id) {
            return $q->where('parent_id', $request->parent_id);
        }

        if ($request->partner_id) {
            return $q->where('partner_id', $request->partner_id);
        }

        if ($request->company_id) {
            return $q->where('company_id', $request->company_id);
        }

        if ($request->module_id) {
            return $q->where('module_id', $request->module_id);
        }

        if ($request->screen_id) {
            return $q->where('screen_id', $request->screen_id);
        }

    }


    private function forget($id)
    {
        $keys = [
            "WorkflowTrees",
            "WorkflowTrees_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }


}
