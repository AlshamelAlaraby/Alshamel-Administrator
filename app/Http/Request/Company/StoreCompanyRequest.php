<?php

namespace App\Http\Request\Company;

use Illuminate\Foundation\Http\FormRequest;

class storeCompanyRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            "client_id"  => "required|exists:clients,id",
            "name"       => "required|string|max:100",
            "name_e"     => "required|string|max:100",
            "url"        => "required|string|max:200",
            "logo"       => "required|image",
            "address"    => "required|string|max:200",
            "phone"      => "required|numeric|digits_between:8,16",
            "cr"         => "required|string",
            "tax_id"     => "required|numeric|digits_between:1,10",
            "vat_no"     => "required|numeric|digits_between:1,10",
            "email"      => "required|email|unique:companies,email",
            "website"    => "required|string|max:200",
            "is_active"  => "in:0,1",
        ];
    }
}
