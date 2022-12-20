<?php

namespace App\Http\Controllers\WorkflowTree;

use App\Http\Controllers\ResponseController;
use App\Http\Resources\WorkflowTree\WorkflowTreeResource1;
use App\Models\Company;
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
      return  responseJson(200, 'success',($this->resource)::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('WorkflowTrees_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('WorkflowTrees_' . $id, $model);
                }
            }
            return responseJson( 200 , __('Done'), new WorkflowTreeResource($model),);
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }

    public function  everything_about_the_company($id){
        $company = Company::query ()->find ($id);
        if (!$company){
            return responseJson( 404 , __('message.data not found'));
        }
        $wf = WorkflowTree::query ()->where ('is_active',1)->where ('company_id',$company->id)->get();
        $company->work_flow_trees = WorkflowTreeResource1::collection ($wf);
        return responseJson( 200 , __(''),$company);
    }


    public function store(StoreWorkflowTreeRequest $request)
    {
        try {
           return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdateWorkflowTreeRequest $request , $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                 return responseJson( 404 , __('message.data not found'));
            }
            $model = $this->repository->update($request->validated(), $id);

            return responseJson(200 , __('Done'));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }

    }


    public function delete($id)
    {
        try{
            $model = $this->repository->find($id);
            if (!$model) {
                 return responseJson( 404 , __('message.data not found'));
            }
            $this->repository->delete($id);
            return  responseJson(200 , __('Done'));

        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
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
