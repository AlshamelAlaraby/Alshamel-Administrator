<?php

namespace App\Http\Requests\Helpfile;

use Illuminate\Foundation\Http\FormRequest;

class StoreHelpfileRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'       => 'required|string|max:100|unique:helpfiles,name',
            'name_e'     => 'required|string|max:100|unique:helpfiles,name_e',
            'url'        => 'required|string|max:200|unique:helpfiles,url'
        ];
    }

}
