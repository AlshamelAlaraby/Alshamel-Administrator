<?php

namespace App\Http\Controllers\Helpfile;

use App\Http\Controllers\Controller;
use App\Repositories\Helpfile\HelpfileRepositoryInterface;
use App\Http\Resources\Helpfile\HelpfileResource;
use Illuminate\Http\Request;
use App\Http\Requests\Helpfile\StoreHelpfileRequest;
use App\Http\Requests\Helpfile\UpdateHelpfileRequest;
use Mockery\Exception;

class HelpfileController extends Controller
{

    protected $repository;
    protected $resource = HelpfileResource::class;


    public function __construct(HelpfileRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('Helpfiles');

            if (!$models) {
                $models = $this->repository->getAllHelpfiles($request);

                cachePut('Helpfiles', $models);
            }
        } else {

            $models = $this->repository->getAllHelpfiles($request);
        }

        return $this->successResponse (($this->resource)::collection ($models['data']) ,__ ('Done'),200);
    }


    public function find($id)
    {

        try{
            $model = cacheGet('Helpfiles_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return $this->errorResponse( __('message.data not found'),404);
                } else {
                    cachePut('Helpfiles_' . $id, $model);
                }
            }
            return $this->successResponse( new HelpfileResource($model),__ ('Done'),200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function store(StoreHelpfileRequest $request)
    {
        try {
            return $this->successResponse($this->repository->create($request->validated()), __('Done'), 200);
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }


    public function update(UpdateHelpfileRequest $request , $id)
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
