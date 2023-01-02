<?php

namespace App\Http\Controllers\Screen;

use App\Exceptions\NotFoundException;
use App\Http\Controllers\ResponseController;
use App\Http\Requests\Screen\AddScreenToDocumentTypeRequest;
use App\Http\Requests\Screen\StoreScreenRequest;
use App\Http\Requests\Screen\UpdateScreenRequest;
use App\Http\Resources\Screen\ScreenResource;
use App\Repositories\Screen\ScreenRepositoryInterface;
use Illuminate\Http\Request;
use Mockery\Exception;

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
        return responseJson(200, 'success', ($this->resource)::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }
    public function getScreenDocumentTypes($screen_id)
    {
        return $this->repository->getScreenDocumentTypes($screen_id);
    }
    public function getScreenButtons($screen_id)
    {
        return $this->repository->getScreenButtons($screen_id);
    }

    public function find($id)
    {


        $model = cacheGet('Screens_' . $id);

        if (!$model) {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('Screens_' . $id, $model);
            }
        }
        return responseJson(200, __('Done'), new ScreenResource($model));
    }

    public function store(StoreScreenRequest $request)
    {

        return responseJson(200, __('Done'), $this->repository->create($request->validated()));
    }

    public function update(UpdateScreenRequest $request, $id)
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
        if ($model->hasChildren()) {
            return responseJson(400, __('message.data has relation cant delete'));
        }
        $this->repository->delete($id);
        return responseJson(200, __('Done'));
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $model = $this->repository->find($id);
            $arr = [];
            if ($model->hasChildren()) {
                $arr[] = $id;
                continue;
            }
            $this->repository->delete($id);
        }
        if (count($arr) > 0) {
            return responseJson(400, __('some items has relation cant delete'));
        }
        return responseJson(200, __('Done'));
    }

    public function addScreenToDocumentType(AddScreenToDocumentTypeRequest $request)
    {

        if ($this->repository->screenDocumentExist($request->screen_id, $request->documentType_id)) {
            return response()->json(["error" => "Screen document exist"], 422);
        }
        $this->repository->addScreenToDocumentType($request);
        return responseJson(200, 'success');
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

    public function removeScreenFromDocumentType($screen_id, $documentType_id)
    {

        $this->repository->removeScreenFromDocumentType($screen_id, $documentType_id);
        return responseJson(200, 'deleted successfully');
    }
}
