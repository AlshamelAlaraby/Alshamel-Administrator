<?php

namespace App\Http\Resources\Helpfile;

use Illuminate\Http\Resources\Json\JsonResource;

class HelpfileResource extends JsonResource
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
            'name' => $this->name ,
            'name_e' => $this->name_e ,
            'url' => $this->url ,
        ];
    }
}
