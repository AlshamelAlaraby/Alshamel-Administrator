<?php

namespace App\Http\Controllers\Company;

use App\Http\Request\Company\StoreCompanyRequest;
use App\Http\Request\Company\UpdateCompanyRequest;
use App\Http\Resources\Company\CompanyResource;
use App\Repositories\Company\CompanyRepositoryInterface;
use App\Traits\ApiResponser;
use Illuminate\Routing\Controller;
use Mockery\Exception;
use Illuminate\Http\Request;


class CompanyController extends Controller
{
    use ApiResponser;
    public $repository;
    public $resource = CompanyResource::class;
    public function __construct(CompanyRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('company');

            if (!$models) {
                $models = $this->repository->getAllCompanies($request);

                cachePut('company', $models);
            }
        } else {

            $models = $this->repository->getAllCompanies($request);
        }

        return responseJson(200, 'success', CompanyResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);

    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreCompanyRequest $request)
    {
        try {
            // return responseJson(200 , __('created'),  new CompanyResource($this->repository->create($request->validated())));
            return $this->repository->create($request->validated());
        } catch (Exception $exception) {
            return  $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try{
            $model = cacheGet('company_' . $id);

            if (!$model) {
                $model = $this->repository->show($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('company_' . $id, $model);
                }
            }
            return responseJson( 200 ,__ ('Done'),new CompanyResource( $model ));
        } catch (Exception $exception) {
            return responseJson($exception->getCode() ,$exception->getMessage());
        }

    }


    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateCompanyRequest $request, $id)
    {
        try {
            $model = $this->repository->show($id);
            if (!$model) {
                return  $this->errorResponse(__('message.data not found'), 404);
            }
            return  $this->repository->update($request->validated(), $id);
        } catch (Exception $exception) {
            return  $this->errorResponse($exception->getMessage(), $exception->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try{
            $model = $this->repository->show($id);
            if (!$model) {
                return  responseJson(404 , __('message.data not found'));
            }
            $this->repository->destroy($id);
            return  responseJson(200 ,__('Done')  );

        } catch (Exception $exception) {
            return responseJson($exception->getCode() ,$exception->getMessage());
        }
    }
}
