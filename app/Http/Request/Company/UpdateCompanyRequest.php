<?php

namespace App\Http\Request\Company;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;

class UpdateCompanyRequest extends FormRequest
{

    public function rules(Request $request)
    {
        return [
            "partner_id"  => "exists:partners,id",
            "name"       => "string|max:100",
            "name_e"     => "string|max:100",
            "url"        => "string|max:200",
            "logo"       => "image",
            "address"    => "string|max:200",
            "phone"      => "numeric|digits_between:8,16",
            "cr"         => "string",
            "tax_id"     => "numeric|digits_between:1,10",
            "vat_no"     => "numeric|digits_between:1,10",
            "email"      => "email|unique:companies,email,".$request->id,
            "website"    => "string|max:200",
            "is_active"  => "in:active,inactive",
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
