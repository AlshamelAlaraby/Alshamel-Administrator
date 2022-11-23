<?php

namespace App\Repositories\Module;

interface ModuleInterface
{

    public function all($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);

    public function addModuleToCompany($request);

    public function removeModuleFromCompany($module_id, $company_id);

}
