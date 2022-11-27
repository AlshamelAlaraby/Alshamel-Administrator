<?php

namespace App\Repositories\Serial;

interface SerialRepositoryInterface
{

    public function getAllSerials($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);


}
