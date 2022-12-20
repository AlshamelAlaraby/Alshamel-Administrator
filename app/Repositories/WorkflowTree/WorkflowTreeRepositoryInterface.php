<?php

namespace App\Repositories\WorkflowTree;

interface WorkflowTreeRepositoryInterface
{

    public function getAllWorkflowTrees($request);

    public function logs($id);

    public function find($id);


    public function create($request);

    public function update($request, $id);

    public function delete($id);


}
