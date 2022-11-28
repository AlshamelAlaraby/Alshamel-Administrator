<?php

namespace App\Http\Controllers\Branch;







use App\Http\Controllers\ResponseController;

use App\Http\Request\Branch\CreateBranchRequest;
use App\Http\Request\Branch\EditBranchRequest;
use App\Http\Resources\Branch\BranchResource;
use App\Repositories\Branch\BranchRepositoryInterface;
use Illuminate\Support\Facades\DB;

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
            if (!DB::table('companies')->find($request->company_id)){
                return $this->errorResponse (__ ('company does\'t exist'),422);
            }
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
        $data = [];
        if ($request->company_id){
            if (!DB::table('companies')->find($request->company_id)){
                return $this->errorResponse (__ ('company does\'t exist'),422);
            }
            $data['company_id']=$request->company_id;
        }
        if ($request->name){
            $data['name']=$request->name;
        }
        if ($request->name_e){
            $data['name_e']=$request->name_e;
        }
        if ($request->is_active){
            $data['is_active']=$request->is_active;
        }
        try {
            return $this->successResponse (new $this->resource($this->repository->update($data,$id)),__('updated'),200);
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
        $this->repository->delete($id);
        return $this->successResponse (null,__('deleted'),200);
    }
}
