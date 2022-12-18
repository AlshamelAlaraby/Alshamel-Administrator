<?php

namespace App\Http\Controllers\Hotfield;

use App\Http\Controllers\Controller;
use App\Repositories\Hotfield\HotfieldRepositoryInterface;
use App\Http\Resources\Hotfield\HotfieldResource;
use Illuminate\Http\Request;
use App\Http\Requests\Hotfield\StoreHotfieldRequest;
use App\Http\Requests\Hotfield\UpdateHotfieldRequest;
use Mockery\Exception;

class HotfieldController extends Controller
{

    protected $repository;
    protected $resource = HotfieldResource::class;


    public function __construct(HotfieldRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('Hotfields');

            if (!$models) {
                $models = $this->repository->getAllHotfields($request);
                cachePut('Hotfields', $models);
            }
        } else {

            $models = $this->repository->getAllHotfields($request);
        }

        return responseJson(200, 'success', HotfieldResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);

    }


    public function find($id)
    {
        try{
            $model = cacheGet('Hotfields_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('Hotfields_' . $id, $model);
                }
            }
            return responseJson(200 , __('Done'), new HotfieldResource($model));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function store(StoreHotfieldRequest $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdateHotfieldRequest $request , $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson( 404 , __('message.data not found'));
            }
            $model = $this->repository->update($request->validated(), $id);

            return  responseJson(200 , __('Done'));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
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
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }
}
