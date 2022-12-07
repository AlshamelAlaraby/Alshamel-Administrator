<?php

namespace App\Http\Resources\DocumentType;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Enums\IsDefault;


class DocumentTypeResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'name_e' => $this->name_e,
            'is_default' => $this->is_default==IsDefault::DEFAULT->value ? "Default":"Undefault",
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
