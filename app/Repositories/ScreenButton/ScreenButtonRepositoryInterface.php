<?php

namespace App\Repositories\ScreenButton;

interface ScreenButtonRepositoryInterface
{

    public function getAllScreenButtons($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);


}
