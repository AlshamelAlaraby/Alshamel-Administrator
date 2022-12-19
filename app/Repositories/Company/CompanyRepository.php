<?php


namespace App\Repositories\Company;


use App\Http\Resources\Company\CompanyResource;
use App\Models\Company;
use App\Models\UserSettingScreen;
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
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

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


    public function setting($request)
    {
        DB::transaction(function () use ($request) {
            $screenSetting = UserSettingScreen::where('user_id',$request['user_id'])->where('screen_id',$request['screen_id'])->first();
            $request['data_json'] =json_encode($request['data_json']);
            if (!$screenSetting) {
                UserSettingScreen::create($request);
            } else {
                $screenSetting->update($request);
            }
        });
    }

    public function getSetting($user_id, $screen_id)
    {
        return  UserSettingScreen::where('user_id',$user_id)->where('screen_id',$screen_id)->first();
    }

    public function companyModules($request)
    {
        return $this->model->filterCompanyModules($request)->get();
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
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
