<?php

namespace App\Http\Requests\Company;

use App\Traits\ApiResponser;
use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
{

    use ApiResponser;

    public function rules()
    {
        return [
            "partner_id"  => "required|exists:partners,id",
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
            "is_active"  => "in:active,inactive",
        ];
    }

    public function authorize()
    {
        return true;
    }

}
