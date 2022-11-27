<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\ResponseController;
use App\Repositories\Customer\CustomerRepositoryInterface;
use App\Http\Resources\Customer\CustomerResource;
use Illuminate\Http\Request;
use App\Http\Requests\Customer\StoreCustomerRequest;
use App\Http\Requests\Customer\UpdateCustomerRequest;
use Mockery\Exception;

class CustomerController extends ResponseController
{

    protected $repository;
    protected $resource = CustomerResource::class;


    public function __construct(CustomerRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }


    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('customers');
            if (!$models) {
                $models = $this->repository->getAllCustomers($request);
                cachePut('customers', $models);
            }
        } else {
            $models = $this->repository->getAllCustomers($request);
        }
        return $this->successResponse (($this->resource)::collection ($models['data']) ,__ ('Done'),200);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('customers_' . $id);
            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return errorResponse( __('message.data not found'),404);
                } else {
                    cachePut('customers_' . $id, $model);
                }
            }
            return $this->successResponse( new CustomerResource($model),__ ('Done'),200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function store(StoreCustomerRequest $request)
    {
        try {
            return $this->successResponse(new $this->resource($this->repository->create($request->validated())), __('created'), 200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function update(UpdateCustomerRequest $request, $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return  $this->errorResponse( __('message.data not found'),404);
            }
            $model = $this->repository->update($request, $id);

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
