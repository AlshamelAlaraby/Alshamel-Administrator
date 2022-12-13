<?php

namespace App\Http\Resources\CompanyModule;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyModuleResource extends JsonResource
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
            "id"     => $this->id,
            "company_id"     => $this->company_id,
            "module_id"       => $this->module_id,
            "start_date"         => $this->start_date,
            "end_date"         => $this->end_date,
            "allowed_users_no" => $this->allowed_users_no,
            "created_at"       => $this->created_at,
            "updated_at"       => $this->updated_at,
        ];
    }
}
