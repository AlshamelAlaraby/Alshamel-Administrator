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
            $models = cacheGet('WorkflowTrees');

            if (!$models) {
                $models = $this->repository->getAllWorkflowTrees($request);

                cachePut('WorkflowTrees', $models);
            }
        } else {

            $models = $this->repository->getAllWorkflowTrees($request);
        }

        return $this->successResponse (($this->resource)::collection ($models['data']) ,__ ('Done'),200);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('WorkflowTrees_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return $this->errorResponse( __('message.data not found'),404);
                } else {
                    cachePut('WorkflowTrees_' . $id, $model);
                }
            }
            return $this->successResponse( new WorkflowTreeResource($model),__ ('Done'),200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function store(StoreWorkflowTreeRequest $request)
    {
        try {
            return $this->successResponse($this->repository->create($request->validated()), __('Done'), 200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function update(UpdateWorkflowTreeRequest $request , $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return  $this->errorResponse( __('message.data not found'),404);
            }
            $model = $this->repository->update($request->validated(), $id);

            return  $this->successResponse(__('Done'),200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }

    }


    public function delete($id)
    {
        try{
            $model = $this->repository->find($id);
            if (!$model) {
                return  $this->errorResponse( __('message.data not found'),404);
            }
            $this->repository->delete($id);
            return  $this->successResponse(__('Done'),200);

        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
