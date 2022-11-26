<?php

namespace App\Http\Request\Company;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        return [
            "client_id"  => "exists:clients,id",
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
            "is_active"  => "in:0,1",
        ];
    }
}
