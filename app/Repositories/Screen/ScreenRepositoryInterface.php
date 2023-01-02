<?php

namespace App\Repositories\Screen;

interface ScreenRepositoryInterface
{

    public function getAllScreens($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);

    public function addScreenToDocumentType($request);

    public function logs($id);

    public function removeScreenFromDocumentType($screen_id, $documentType_id);

    public function screenDocumentExist($screen_id, $documentType_id);

    public function getScreenDocumentTypes($id);

    public function getScreenButtons($id);
}
