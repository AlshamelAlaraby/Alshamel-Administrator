<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{

    public function logout()
    {
        $user = request()->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return responseJson(200, 'Logged Out Successfully');
    }

    public function partnerLogout()
    {
        $user = request()->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return responseJson(200, 'Logged Out Successfully');
    }

}
