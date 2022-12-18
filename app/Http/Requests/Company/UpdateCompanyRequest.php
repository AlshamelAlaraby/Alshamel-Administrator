<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateCompanyRequest extends FormRequest
{

    public function rules(Request $request)
    {
        return [
            "partner_id"  => [],
            "name"       => "string|max:100",
            "name_e"     => "string|max:100",
            "url"        => "string|max:200",
            "logo"       => "nullable".($request->hasFile('logo')? '|image':''),
            "address"    => "string|max:200",
            "phone"      => "numeric",
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

}
