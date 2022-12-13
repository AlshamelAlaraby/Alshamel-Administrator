<?php

namespace App\Repositories\Partner;

interface PartnerRepositoryInterface
{

    public function getAllPartners($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function logs($id);

    public function delete($id);

    public function setting($request);

    public function getSetting($user_id , $screen_id);


}
