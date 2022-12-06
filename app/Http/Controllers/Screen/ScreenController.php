<?php

namespace App\Http\Controllers\Screen;

use App\Http\Controllers\ResponseController;
use App\Repositories\Screen\ScreenRepositoryInterface;
use App\Http\Resources\Screen\ScreenResource;
use Illuminate\Http\Request;
use App\Http\Requests\Screen\StoreScreenRequest;
use App\Http\Requests\Screen\UpdateScreenRequest;
use Mockery\Exception;
use App\Models\Screen;
class ScreenController extends ResponseController
{

    protected $repository;
    protected $resource = ScreenResource::class;


    public function __construct(ScreenRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }


    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('Screens');

            if (!$models) {
                $models = $this->repository->getAllScreens($request);

                cachePut('Screens', $models);
            }
        } else {

            $models = $this->repository->getAllScreens($request);
        }

        return $this->successResponse (($this->resource)::collection ($models['data']) ,__ ('Done'),200);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('Screens_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return $this->errorResponse( __('message.data not found'),404);
                } else {
                    cachePut('Screens_' . $id, $model);
                }
            }
            return $this->successResponse( new ScreenResource($model),__ ('Done'),200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function store(StoreScreenRequest $request)
    {
        try {
            return $this->successResponse($this->repository->create($request->validated()), __('Done'), 200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function update(UpdateScreenRequest $request , $id)
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
