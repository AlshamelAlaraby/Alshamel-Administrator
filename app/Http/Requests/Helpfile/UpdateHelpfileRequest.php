<?php

namespace App\Http\Requests\Helpfile;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateHelpfileRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules(Request $request)
    {
        return [
            'name'       => 'string|max:100|unique:helpfiles,name,'    .$request->id ,
            'name_e'     => 'string|max:100|unique:helpfiles,name_e,'  .$request->id ,
            'url'        => 'string|max:200|unique:helpfiles,title,'   .$request->id
        ];
    }

}
