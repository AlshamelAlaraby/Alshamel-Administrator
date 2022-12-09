<?php

namespace App\Http\Resources\Company;

use App\Http\Resources\Module\ModuleResource;
use App\Http\Resources\Partner\PartnerRelationResource;
use App\Http\Resources\Partner\PartnerResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            "id" => $this->id,
            "name"       => $this->name,
            "name_e"     => $this->name_e,
            "url"        => $this->url,
            "logo"       => $this->photoUrl,
            "address"    => $this->address,
            "phone"      => $this->phone,
            "cr"         => $this->cr,
            "tax_id"     => $this->tax_id,
            "vat_no"     => $this->vat_no,
            "email"      => $this->email,
            "website"    => $this->website,
            "is_active"  => $this->is_active,
            "partner" =>  new PartnerResource($this->whenLoaded('partner')),
            "modules" => ModuleResource::collection($this->whenLoaded('modules')),

        ];
    }
}
