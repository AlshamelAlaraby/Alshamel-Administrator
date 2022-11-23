<?php


namespace App\Repositories\Branch;







use App\Models\Branch;

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
        $branch = $this->model->find($id);
        $branch->update ($data);
        return $branch;
    }

    public function delete($id){
        return $this->model->find($id)->delete ();
    }
}