<?php

namespace App\Http\Resources\WorkflowTree;

use App\Models\WorkflowTree;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkflowTreeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'         =>$this->id,
            'name'       => $this->name,
            'name_e'     => $this->name_e,
            "is_active"  => $this->is_active == 1 ? WorkflowTree::ACTIVE : WorkflowTree::INACTIVE,
            'parent_id'  => $this->parent_id ,//== null ?null :optional($this->child)->name,
            'partner_id' => $this->partner_id,
            'company_id' => $this->company_id,
            'module_id'  => $this->module_id,
            'screen_id'  => $this->screen_id,
            'icon_url'   => $this->icon,
            'id_sort'    => $this->id_sort,
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
