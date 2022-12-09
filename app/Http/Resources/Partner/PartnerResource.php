<?php

namespace App\Http\Resources\Partner;

use App\Http\Resources\Company\CompanyResource;
use App\Http\Resources\Module\ModuleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PartnerResource extends JsonResource
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
            'id'   =>$this->id,
            'name' => $this->name,
            'name_e' => $this->name_e,
            "is_active"  => $this->is_active,
            'email' => $this->email,
            'password' => $this->password,
            'mobile_no' => $this->mobile_no,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            "companies" => CompanyResource::collection($this->whenLoaded('companies')),
        ];
    }
}
