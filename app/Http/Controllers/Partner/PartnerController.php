<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\ResponseController;
use App\Repositories\Partner\PartnerRepositoryInterface;
use App\Http\Resources\Partner\PartnerResource;
use Illuminate\Http\Request;
use App\Http\Requests\Partner\StorePartnerRequest;
use App\Http\Requests\Partner\UpdatePartnerRequest;
use Mockery\Exception;
use App\Models\Partner;
class PartnerController extends ResponseController
{

    protected $repository;
    protected $resource = PartnerResource::class;


    public function __construct(PartnerRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }


    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('Partners');

            if (!$models) {
                $models = $this->repository->getAllPartners($request);

                cachePut('Partners', $models);
            }
        } else {

            $models = $this->repository->getAllPartners($request);
        }

        return $this->successResponse (($this->resource)::collection ($models['data']) ,__ ('Done'),200);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('Partners_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return $this->errorResponse( __('message.data not found'),404);
                } else {
                    cachePut('Partners_' . $id, $model);
                }
            }
            return $this->successResponse( new PartnerResource($model),__ ('Done'),200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function store(StorePartnerRequest $request)
    {
        try {
            return $this->repository->create($request->validated());
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function update(UpdatePartnerRequest $request , $id)
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
