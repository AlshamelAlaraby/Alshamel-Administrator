<?php

namespace App\Http\Request;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;

class UpdateUserRequest extends FormRequest
{

    public function rules(Request $request)
    {
        return [
            'name' => 'required|string|min:3',
            'email' => 'required|email|unique:users,email,'.$request->id,
            'password' => 'sometimes|nullable|min:6',      
            'photo' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,gif,svg|max:10240',
            'active' => 'required',
            'phone' => 'required|numeric|min:8',
        ];
    }

    
    public function authorize()
    {
        return true;
    }


    public function failedValidation ( Validator $validator )
    {
        throw new HttpResponseException(response()->json(
            [
                'status'    => 422,

                'success'   => false,

                'message'   => __ ('validation errors'),

                'data'      => $validator->errors()
            ]
        ));
    }
}
