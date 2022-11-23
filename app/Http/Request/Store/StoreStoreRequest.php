<?php

namespace App\Http\Request\Store;

use Illuminate\Foundation\Http\FormRequest;

class storeStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules()
    {
        return [
            "company_id" => "required|exists:companies,id",
            "branch_id"  => "required|exists:branches,id",
            "name"       => "required|string|max:100",
            "name_e"     => "required|string|max:100",
            "is_active"  => "in:active,inactive",
        ];
    }
}
