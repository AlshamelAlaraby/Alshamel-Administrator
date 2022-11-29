<?php

namespace App\Http\Controllers\Branch;







use App\Http\Controllers\ResponseController;

use App\Http\Request\Branch\CreateBranchRequest;
use App\Http\Request\Branch\EditBranchRequest;
use App\Http\Resources\Branch\BranchResource;
<<<<<<< HEAD
use App\Repositories\Branch\BranchRepositoryInterface;
use Illuminate\Support\Facades\DB;

=======
use App\Http\Resources\Module\ModuleResource;
use App\Repositories\Branch\BranchRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
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
<<<<<<< HEAD
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->successResponse (($this->resource)::collection ($this->repository->getAllBranches ()),__ ('Done'),200);
=======
     * @return \response
     */
    public function index(Request $request)
    {

        $branches = cacheGet ('branches');
        if (!$branches){
            $branches = $this->repository->getAllBranches($request);
            cachePut('branches', $branches);
        }
        return responseJson(200, 'success', ($this->resource)::collection ($branches['data']), $branches['paginate'] ? getPaginates($branches['data']) : null);
//        return $this->successResponse (($this->resource)::collection ($this->repository->getAllBranches ()),__ ('Done'),200);
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
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
<<<<<<< HEAD
            return $this->successResponse (new $this->resource($this->repository->create($request->validated ())),__('created'),200);
        }catch (Exception $exception){
            return $this->errorResponse ($exception->getMessage (),$exception->getCode ());
=======
            $this->repository->create($request->validated ());
            return responseJson (200,__ ('done'));
        }catch (Exception $exception){
            return responseJson ($exception->getCode (),$exception->getMessage ());
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
<<<<<<< HEAD
     * @return \Illuminate\Http\JsonResponse
=======
     * @return \response
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
     */
    public function show($id)
    {
        if ($branch = $this->repository->find($id)){
<<<<<<< HEAD
            return $this->successResponse (new $this->resource($branch),__ ('Done'),200);
        }
        return $this->errorResponse ('not found',404);
=======
            return responseJson(200,__ ('Done'),new $this->resource($branch),200);
        }
        return responseJson (404,__ ('not found'));
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
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
<<<<<<< HEAD
     * @return \Illuminate\Http\JsonResponse
=======
     * @return \response
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
     */
    public function update(EditBranchRequest $request, $id)
    {
        $data = [];
        if ($request->company_id){
            if (!DB::table('companies')->find($request->company_id)){
<<<<<<< HEAD
                return $this->errorResponse (__ ('company does\'t exist'),422);
=======
                return responseJson(422,__ ('company does\'t exist'));
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
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
<<<<<<< HEAD
            return $this->successResponse (new $this->resource($this->repository->update($data,$id)),__('updated'),200);
        }catch (Exception $exception){
            return $this->errorResponse ($exception->getMessage (),$exception->getCode ());
=======
            return responseJson(200,__('updated'));
        }catch (Exception $exception){
            return responseJson($exception->getCode (),$exception->getMessage ());
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
<<<<<<< HEAD
     * @return \Illuminate\Http\JsonResponse
=======
     * @return \response
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
     */
    public function destroy($id)
    {
        $this->repository->delete($id);
<<<<<<< HEAD
        return $this->successResponse (null,__('deleted'),200);
=======
        return responseJson(200,__('deleted'));
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
    }
}
