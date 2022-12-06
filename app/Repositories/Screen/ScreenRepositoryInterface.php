<?php

namespace App\Repositories\Screen;

interface ScreenRepositoryInterface
{

    public function getAllScreens($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);


}
