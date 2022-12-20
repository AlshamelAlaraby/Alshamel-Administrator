<?php

namespace App\Http\Requests\Button;

use Illuminate\Foundation\Http\FormRequest;

class StoreButtonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'       => 'required|string|max:100|unique:sys_buttons,name',
            'name_e'     => 'required|string|max:100|unique:sys_buttons,name_e',
            "media" => ["required", "exists:media,id", new \App\Rules\MediaRule()],
        ];
    }
}
