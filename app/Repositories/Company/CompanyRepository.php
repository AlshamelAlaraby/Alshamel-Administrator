<?php


namespace App\Repositories\Company;


use App\Http\Resources\Company\CompanyResource;
use App\Models\Company;
use App\Traits\ApiResponser;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class CompanyRepository implements CompanyRepositoryInterface
{
    use ApiResponser;

    public $model;
    public function __construct(Company $model){
        $this->model = $model;
    }

    public function getAllCompanies ($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }

        })->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function create($request){
        if (isset($request['logo'])) {
            $request['logo']->store('companies');
            $request['logo'] = storage_path('app/companies'). '/' .$request['logo']->hashName();
        }

        DB::transaction(function () use ($request) {
            $this->model->create($request);
            cacheForget("company");
        });

        return $this->successResponse([],__('created'));
    }

    public function show($id){
        return $this->model->find($id);
    }

    public function update($data,$id){
        if (request()->hasFile('logo')) {
            Storage::disk('companies')->delete($this->model->find($id)['logo']);
            $data['logo']->store('companies');
            $data['logo'] = storage_path('app/companies'). '/' .$data['logo']->hashName();
        }

        DB::transaction(function () use ($id,$data) {
            $this->model->find($id)->update($data);
            $this->forget($id);
        });

        return $this->successResponse([],__('created'));
    }

    public function destroy($id){

        $model = $this->model->find($id);
        $this->forget($id);
        $model->delete();
    }


    private function forget($id)
    {
        $keys = [
            "company",
            "company_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
