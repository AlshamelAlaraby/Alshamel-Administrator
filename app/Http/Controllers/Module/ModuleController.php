<?php

namespace App\Http\Controllers\Module;

use App\Http\Requests\Module\AllModuleRequest;
use App\Http\Requests\Module\StoreModuleRequest;
use App\Http\Requests\Module\UpdateModuleRequest;
use App\Http\Resources\Module\ModuleResource;
use App\Http\Resources\ScreenSetting\ScreenSettingResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Mockery\Exception;

class ModuleController extends Controller
{
    public function __construct(private \App\Repositories\Module\ModuleInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('modules_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('modules_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new ModuleResource($model));
    }

    public function all(AllModuleRequest $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('modules');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('modules', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', ModuleResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreModuleRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateModuleRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->update($request, $id);

        return responseJson(200, 'success');
    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        if ($model->have_children) {
            return responseJson(400, __('message.parent have children'));
        }
        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

    public function addModuleToCompany(\App\Http\Requests\Module\AddCompanyToModuleRequest$request)
    {
        $this->modelInterface->addModuleToCompany($request);
        return responseJson(200, 'success');
    }

    public function removeModuleFromCompany($module_id, $company_id)
    {

        $this->modelInterface->removeModuleFromCompany($module_id, $company_id);
        return responseJson(200, 'success');
    }

    public function screenSetting(Request $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->modelInterface->setting($request->all()));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }

    public function getScreenSetting($user_id , $screen_id)
    {
        try{
            $screenSetting = $this->modelInterface->getSetting($user_id , $screen_id);
            if (!$screenSetting) {
                return responseJson( 404 , __('message.data not found'));
            }
            return responseJson( 200 , __('Done'), new ScreenSettingResource($screenSetting));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }

}
