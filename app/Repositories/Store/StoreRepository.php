<?php


namespace App\Repositories\Store;


use App\Models\Store;
use Illuminate\Support\Facades\Storage;

class StoreRepository implements StoreRepositoryInterface
{
    public $model;
    public function __construct(Store $model){
        $this->model = $model;
    }

    public function getAllStores ()
    {
        return $this->model->get();
    }

    public function create(array $data){
        return $this->model->create($data);
    }

    public function show($id){
        return $this->model->find($id);
    }

    public function update($data,$id){

        return $this->model->find($id)->update($data);
    }

    public function destroy($id){
        return $this->model->find($id)->delete();
    }

}
