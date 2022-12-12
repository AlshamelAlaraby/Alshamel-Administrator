<?php

namespace App\Http\Controllers\Partner;

use App\Exceptions\NotFoundException;
use App\Http\Controllers\ResponseController;
use App\Http\Requests\Auth\LoginRequest;
use App\Repositories\Partner\PartnerRepositoryInterface;
use App\Http\Resources\Partner\PartnerResource;
use Illuminate\Http\Request;
use App\Http\Requests\Partner\StorePartnerRequest;
use App\Http\Requests\Partner\UpdatePartnerRequest;
use App\Http\Resources\ScreenSetting\ScreenSettingResource;
use Illuminate\Support\Facades\Hash;
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


    public function screenSetting(Request $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->setting($request->all()));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }

    public function getScreenSetting($user_id , $screen_id)
    {
        try{
            $screenSetting = $this->repository->getSetting($user_id , $screen_id);
            if (!$screenSetting) {
                return responseJson( 404 , __('message.data not found'));
            }
            return responseJson( 200 , __('Done'), new ScreenSettingResource($screenSetting));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
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

    public function companies(LoginRequest $request)
    {
        try
        {
            $user = Partner::whereEmail($request->email)->first();
            if(!$user)
            {
                throw new NotFoundException();
            }
            if(!Hash::check($request->password, $user->password))
            {
                return responseJson(422,'Invalid credentials');
            }
            $data['partner'] = new partnerResource($user->load(['companies.modules']));
            return responseJson(200,'success',$data);
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }
}
