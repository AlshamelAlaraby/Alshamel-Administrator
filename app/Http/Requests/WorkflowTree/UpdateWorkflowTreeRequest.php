<?php

namespace App\Http\Requests\WorkflowTree;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateWorkflowTreeRequest extends FormRequest
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
            'icon_url'   => 'nullable|image|mimes:jpeg,jpg,png,svg',
            'id_sort'    => 'nullable',
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
