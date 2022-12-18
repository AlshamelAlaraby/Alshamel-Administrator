<?php

namespace App\Http\Controllers\WorkflowTree;

use App\Http\Controllers\ResponseController;
use App\Repositories\WorkflowTree\WorkflowTreeRepositoryInterface;
use App\Http\Resources\WorkflowTree\WorkflowTreeResource;
use Illuminate\Http\Request;
use App\Http\Requests\WorkflowTree\StoreWorkflowTreeRequest;
use App\Http\Requests\WorkflowTree\UpdateWorkflowTreeRequest;
use Mockery\Exception;
use App\Models\WorkflowTree;

class WorkflowTreeController extends ResponseController
{

    protected $repository;
    protected $resource = WorkflowTreeResource::class;


    public function __construct(WorkflowTreeRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }


    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('work_flow_trees');
            if (!$models) {
                $models = $this->repository->all($request);
                cachePut('work_flow_trees', $models);
            }
        } else {
            $models = $this->repository->all($request);
        }
        return  responseJson(200, 'success', ($this->resource)::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function find($id)
    {
        $model = cacheGet('work_flow_trees_' . $id);
        if (!$model) {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('work_flow_trees_' . $id, $model);
            }
        }
        return responseJson(200, __('Done'), new WorkflowTreeResource($model),);
    }


    public function store(StoreWorkflowTreeRequest $request)
    {
        $model = $this->repository->create($request->validated());
        return responseJson(200, 'success', new WorkflowTreeResource($model));
    }


    public function update(UpdateWorkflowTreeRequest $request, $id)
    {

        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->repository->update($request->validated(), $id);

        return responseJson(200, __('Done'));
    }


    public function delete($id)
    {

        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $this->repository->delete($id);
        return  responseJson(200, __('Done'));
    }

    public function logs($id)
    {
        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        $logs = $this->repository->logs($id);
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));
    }
}
