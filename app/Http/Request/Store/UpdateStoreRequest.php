<?php

namespace App\Http\Request\Store;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class UpdateStoreRequest extends FormRequest
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
            "company_id" => "exists:companies,id",
            "branch_id"  => "exists:branches,id",
            "name"       => "string|max:100",
            "name_e"     => "string|max:100",
            "is_active"  => "in:active,inactive",
        ];
    }
}
