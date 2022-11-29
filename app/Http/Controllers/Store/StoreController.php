<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\ResponseController;
use Mockery\Exception;
use Illuminate\Contracts\Support\Renderable;
use App\Repositories\Store\StoreRepositoryInterface;
use App\Http\Resources\Store\StoreResource;
use App\Http\Request\Store\StoreStoreRequest;
use App\Http\Request\Store\UpdateStoreRequest;

class StoreController extends ResponseController
{
    public $repository;
    public $resource = StoreResource::class;
    public function __construct (StoreRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->successResponse (($this->resource)::collection ($this->repository->getAllCompanies ()),__ ('Done'),200);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreStoreRequest $request)
    {
        try {
            return $this->successResponse (new $this->resource($this->repository->create($request->validated ())),__('created'),200);
        }catch (Exception $exception){
            return $this->errorResponse ($exception->getMessage (),$exception->getCode ());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        if ($branch = $this->repository->show($id)){
            return $this->successResponse (new $this->resource($branch),__ ('Done'),200);
        }
        return $this->errorResponse ('not found',404);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateStoreRequest $request, $id)
    {
        try {
            return $this->successResponse ($this->repository->update($request->validated(),$id),__('updated'),200);
        }catch (Exception $exception){
            return $this->errorResponse ($exception->getMessage(),$exception->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->repository->destroy($id);
        return $this->successResponse(null,__('deleted'),200);
    }
}
