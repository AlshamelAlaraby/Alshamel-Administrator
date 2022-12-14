<?php

namespace App\Http\Requests\ScreenButton;

use Illuminate\Foundation\Http\FormRequest;

class StoreScreenButtonRequest extends FormRequest
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
            "screen_id" => "required|exists:screens,id",
            "button_id" => "required|exists:buttons,id",
            'buttons'=>[]
        ];
    }
}
