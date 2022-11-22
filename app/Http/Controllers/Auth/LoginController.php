<?php

namespace App\Http\Controllers\Auth;

use App\Http\Resources\User\UserResource;
use Auth;


use App\Http\Controllers\ResponseController;
use App\Http\Request\Auth\LoginRequest;

class LoginController extends ResponseController
{

    public function login(LoginRequest $request)
    {
        if (!Auth::guard('admin')->attempt($request->only("email", "password")))
        {
            return $this->errorResponse('Email Or Password is wrong!', 422);
        }
        $authUser = UserResource::collection(Auth::guard('admin')->user());
        $success['token'] = $authUser->createToken('sanctumAuth')->plainTextToken;
        $success['user'] = $authUser;
        return $this->successResponse($success, 'success login', 200);
    }
   
}
