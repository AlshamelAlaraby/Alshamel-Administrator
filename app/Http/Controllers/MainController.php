<?php

namespace App\Http\Controllers;

use App\Models\UserSettingScreen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MainController extends Controller
{
    private $setting;
    public function __construct(UserSettingScreen $setting)
    {
        $this->setting = $setting;

    }

    public function setting(Request $request)
    {

        DB::transaction(function () use ($request) {
            $data = $request->all();
            $screenSetting = $this->setting->where('user_id', $data['user_id'])->where('screen_id', $data['screen_id'])->first();
            $data['data_json'] = json_encode($data['data_json']);
            if (!$screenSetting) {
                $this->setting->create($data);
            } else {
                $screenSetting->update($data);
            }
        });

        return responseJson(200, 'success');
    }

    public function getSetting($user_id, $screen_id)
    {
        $model = $this->setting->where('user_id', $user_id)->where('screen_id', $screen_id)->first();
        if (!$model) {
            return responseJson(404, 'not found');
        }
        return responseJson(200, 'success', new \App\Http\Resources\ScreenSetting\ScreenSettingResource($model));

    }
}
