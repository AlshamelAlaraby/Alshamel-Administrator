<?php

namespace App\Http\Controllers\CompanyModule;

use App\Http\Controllers\ResponseController;
use App\Http\Requests\CompanyModule\StoreCompanyModuleRequest;
use App\Http\Requests\CompanyModule\UpdateCompanyModuleRequest;
use App\Http\Resources\CompanyModule\CompanyModuleResource;
use App\Repositories\CompanyModule\CompanyModuleRepositoryInterface;
use Illuminate\Http\Request;
use Mockery\Exception;

class CompanyModuleController extends ResponseController
{

    protected $repository;
    protected $resource = CompanyModuleResource::class;

    public function __construct(CompanyModuleRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('CompanyModules');

            if (!$models) {
                $models = $this->repository->getCompanyModules($request);

                cachePut('CompanyModules', $models);
            }
        } else {

            $models = $this->repository->getCompanyModules($request);
        }

        return responseJson(200, 'success', ($this->resource)::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function find($id)
    {

        try {
            $model = cacheGet('CompanyModules_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson(404, __('message.data not found'));
                } else {
                    cachePut('CompanyModules_' . $id, $model);
                }
            }
            return responseJson(200, __('Done'), new CompanyModuleResource($model), );
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    public function store(StoreCompanyModuleRequest $request)
    {
        try {
            return responseJson(200, __('Done'), $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    public function update(UpdateCompanyModuleRequest $request, $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            }
            $model = $this->repository->update($request->validated(), $id);

            return responseJson(200, __('Done'));
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }

    }

    public function delete($id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            }
            $this->repository->delete($id);
            return responseJson(200, __('Done'));

        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $this->repository->delete($id);
        }
        return responseJson(200, __('Done'));
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
