<?php

namespace App\Http\Requests\WorkflowTree;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkflowTreeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'       => 'required|string|max:255',
            'name_e'     => 'required|string|max:255',
            'is_active'  => 'nullable|in:0,1',
            'parent_id'  => 'nullable',
            'partner_id' => 'required',
            'company_id' => 'required',
            'module_id'  => 'required',
            'screen_id'  => 'required',
            'id_sort'    => 'nullable',
            "media" => ["required", "exists:media,id", new \App\Rules\MediaRule()],
        ];
    }

    public function messages()
    {
        return [
            'required'      => __('message.field is required'),
            'unique'        => __('message.field already exists'),
            'is_active.in'  => __('message.status must be active or inactive'),
        ];
    }
}
