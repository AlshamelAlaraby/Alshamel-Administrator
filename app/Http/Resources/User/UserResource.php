<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'image' => $this->image,
            'name' => $this->name,
            'email' => $this->email,
            'mobile' => $this->mobile,
            'active' => $this->active ? false : true,
            'token' => $this->token,
        ];
    }
}
        