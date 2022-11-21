<?php

namespace App\Http\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
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
}
