<?php

namespace App\Repositories\Partner;

use App\Enums\IsActive;
use App\Models\Partner;
use Illuminate\Support\Facades\DB;
use Hash;
class PartnerRepository implements PartnerRepositoryInterface
{

    private $model;
    public function __construct(Partner $model)
    {
        $this->model = $model;

    }

    public function getAllPartners($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }

        })->latest();

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {
            $data = $request;
            $data['password'] = Hash::make($data['password']);
            $data['is_active'] = $data['is_active'] == 1 ? Partner::ACTIVE : Partner::INACTIVE ;
            $this->model->create($data);
            cacheForget("Partners");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $data = $request;
            if (isset($data['password'])) {
                $data['password'] = Hash::make($data['password']);
            }
            $data['is_active'] = $data['is_active'] == 1 ? Partner::ACTIVE : Partner::INACTIVE ;
            $this->model->where("id", $id)->update($data);
            $this->forget($id);

        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }


    private function forget($id)
    {
        $keys = [
            "Partners",
            "Partners_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
