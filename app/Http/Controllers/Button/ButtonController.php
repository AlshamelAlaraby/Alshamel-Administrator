<?php

namespace App\Http\Controllers\Button;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mockery\Exception;
use App\Repositories\Button\ButtonRepositoryInterface;
use App\Http\Resources\Button\ButtonResource;
use App\Http\Requests\Button\StoreButtonRequest;
use App\Http\Requests\Button\UpdateButtonRequest;

class ButtonController extends Controller
{

    protected $repository;
    protected $resource = ButtonResource::class;


    public function __construct(ButtonRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('Buttons');

            if (!$models) {
                $models = $this->repository->getAllButtons($request);
                cachePut('Buttons', $models);
            }
        } else {

            $models = $this->repository->getAllButtons($request);
        }

        return responseJson(200, 'success', ButtonResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function find($id)
    {

        $model = cacheGet('Buttons_' . $id);

        if (!$model) {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('Buttons_' . $id, $model);
            }
        }
        return responseJson(200, __('Done'), new ButtonResource($model));
    }


    public function logs($id)
    {

        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        return responseJson(200, __('Done'), $this->repository->logs($id));
    }

    public function store(StoreButtonRequest $request)
    {

        return responseJson(200, __('Done'), $this->repository->create($request->validated()));
    }


    public function update(UpdateButtonRequest $request, $id)
    {

        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->repository->update($request->validated(), $id);

        return  responseJson(200, __('Done'));
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

    public function bulkDelete(Request $request){
        foreach ($request->ids as $id){
            $this->repository->delete($id);
        }
        return  responseJson(200, __('Done'));
    }
}
