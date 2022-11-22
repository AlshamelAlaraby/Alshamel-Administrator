<?php


namespace Modules\Branch\Repositories;




use Modules\Branch\Entities\Branch;

class BranchRepository implements BranchRepositoryInterface
{
    public $model;
    public function __construct(Branch $model){
        $this->model = $model;
    }
    public function getAllBranches ()
    {
        return $this->model->get();
    }

    public function create(array $data){
        return $this->model->create($data);
    }

    public function find($id){
        return $this->model->find($id);
    }

    public function update($data,$id){
        return $this->model->find($id)->update ($data);
    }

    public function destroy($id){
        return $this->model->find($id)->delete ();
    }
}