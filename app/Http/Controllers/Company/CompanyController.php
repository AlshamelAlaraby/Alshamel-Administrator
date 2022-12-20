<?php

namespace App\Http\Controllers\Company;

use App\Http\Requests\Company\StoreCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Http\Resources\Company\CompanyResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CompanyController extends Controller
{
    public function __construct(private \App\Repositories\Company\CompanyInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('companies_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('companies_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new CompanyResource($model));
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('companies');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('companies', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', CompanyResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreCompanyRequest $request)
    {
        $model = $this->modelInterface->create($request);
        $model->refresh();
        return responseJson(200, 'success', new CompanyResource($model));
    }

    public function update(UpdateCompanyRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        try {
            $model = $this->repository->show($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            }
            return $this->repository->update($request->validated(), $id);
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $model = $this->repository->show($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            }
            $this->repository->destroy($id);
            return responseJson(200, __('Done'));

        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    public function bulkDelete(Request $request){
        foreach ($request->ids as $id){
            $this->repository->destroy($id);
        }
        return  responseJson(200, __('Done'));
    }

    public function screenSetting(Request $request)
    {
        try {
            return responseJson(200, __('Done'), $this->repository->setting($request->all()));
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    public function getScreenSetting($user_id, $screen_id)
    {
        try {
            $screenSetting = $this->repository->getSetting($user_id, $screen_id);
            if (!$screenSetting) {
                return responseJson(404, __('message.data not found'));
            }
            return responseJson(200, __('Done'), new ScreenSettingResource($screenSetting));
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
        $this->modelInterface->update($request, $id);
        $model->refresh();
        return responseJson(200, 'success', new CompanyResource($model));
    }

    public function logs($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        $logs = $this->modelInterface->logs($id);
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));
    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        if ($model->modules()->count() > 0 || $model->stores()->count() > 0) {
            return responseJson(400, __('message.cant delete this data'));
        }

        return responseJson(200, 'success');
    }
}
