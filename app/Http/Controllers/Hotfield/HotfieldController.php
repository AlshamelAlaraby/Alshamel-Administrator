<?php

namespace App\Http\Controllers\Hotfield;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hotfield\StoreHotfieldRequest;
use App\Http\Requests\Hotfield\UpdateHotfieldRequest;
use App\Http\Resources\Hotfield\HotfieldResource;
use App\Repositories\Hotfield\HotfieldRepositoryInterface;
use Illuminate\Http\Request;

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

        $model = cacheGet('Hotfields_' . $id);

        if (!$model) {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('Hotfields_' . $id, $model);
            }
        }
        return responseJson(200, __('Done'), new HotfieldResource($model));

    }

    public function store(StoreHotfieldRequest $request)
    {

        return responseJson(200, __('Done'), $this->repository->create($request->validated()));

    }

    public function update(UpdateHotfieldRequest $request, $id)
    {

        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->repository->update($request->validated(), $id);

        return responseJson(200, __('Done'));

    }

    public function delete($id)
    {

        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $this->repository->delete($id);
        return responseJson(200, __('Done'));

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
