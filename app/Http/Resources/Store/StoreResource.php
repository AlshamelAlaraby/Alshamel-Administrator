<?php

namespace App\Http\Resources\Store;

use Illuminate\Http\Resources\Json\JsonResource;

class StoreResource extends JsonResource
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
            "company_id" => $this->company->name_e,
            "branch_id"  => $this->branch->name_e,
            "name"       => $this->name,
            "name_e"     => $this->name_e,
            "is_active"  => $this->is_active ,
        ];
    }
}
