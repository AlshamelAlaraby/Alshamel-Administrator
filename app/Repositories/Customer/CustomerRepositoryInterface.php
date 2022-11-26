<?php

namespace App\Repositories\Customer;

interface CustomerRepositoryInterface
{

    public function getAllCustomers($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);


}
