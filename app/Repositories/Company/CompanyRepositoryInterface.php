<?php


namespace App\Repositories\Company;


interface CompanyRepositoryInterface
{

    public function getAllCompanies($request);

    public function create($request);

    public function show($id);

    public function update($data,$id);

    public function destroy($id);

    public function setting($request);

    public function getSetting($user_id , $screen_id);



}
