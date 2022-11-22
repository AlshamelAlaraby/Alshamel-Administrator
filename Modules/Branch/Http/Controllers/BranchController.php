<?php

namespace Modules\Branch\Http\Controllers;

use App\Http\Controllers\ResponseController;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Mockery\Exception;
use Modules\Branch\Http\Requests\CreateBranchRequest;
use Modules\Branch\Http\Requests\EditBranchRequest;
use Modules\Branch\Repositories\BranchRepository;
use Modules\Branch\Repositories\BranchRepositoryInterface;
use Modules\Branch\Transformers\BranchResource;

class BranchController extends ResponseController
{
    public $repository;
    public $resource = BranchResource::class;
    public function __construct (BranchRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->successResponse (($this->resource)::collection ($this->repository->getAllBranches ()),__ ('Done'),200);
    }



    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateBranchRequest $request)
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
        if ($branch = $this->repository->find($id)){
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
    public function update(EditBranchRequest $request, $id)
    {
        try {
            return $this->successResponse (new $this->resource($this->repository->update($request->validated (),$id)),__('updated'),200);
        }catch (Exception $exception){
            return $this->errorResponse ($exception->getMessage (),$exception->getCode ());
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        return $this->successResponse (null,__('deleted'),200);
    }
}
