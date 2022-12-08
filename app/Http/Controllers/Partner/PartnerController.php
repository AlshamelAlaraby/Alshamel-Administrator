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

        return  responseJson(200, 'success',($this->resource)::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('Partners_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('Partners_' . $id, $model);
                }
            }
            return responseJson( 200 , __('Done'), new PartnerResource($model),);
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function store(StorePartnerRequest $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdatePartnerRequest $request , $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return  responseJson( 404 , __('message.data not found'));
            }
            $model = $this->repository->update($request->validated(), $id);

            return  responseJson(200 , __('Done'));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }

    }


    public function delete($id)
    {
        try{
            $model = $this->repository->find($id);
            if (!$model) {
                return  responseJson( 404 , __('message.data not found'));
            }
            $this->repository->delete($id);
            return  responseJson(200 , __('Done'));

        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }
}
