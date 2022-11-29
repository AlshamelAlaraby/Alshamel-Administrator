<?php

namespace App\Http\Controllers\Auth;

<<<<<<< HEAD
use App\Http\Resources\User\UserResource;
use Auth;


use App\Http\Controllers\ResponseController;
use App\Http\Request\Auth\LoginRequest;

class LoginController extends ResponseController
=======
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\AdminResource;
use Auth;


use App\Http\Request\Auth\LoginRequest;

class LoginController extends Controller
>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
{

    public function login(LoginRequest $request)
    {
        if (!Auth::guard('admin')->attempt($request->only("email", "password")))
        {
<<<<<<< HEAD
            return $this->errorResponse('Email Or Password is wrong!', 422);
        }
        $authUser = UserResource::collection(Auth::guard('admin')->user());
        $success['token'] = $authUser->createToken('sanctumAuth')->plainTextToken;
        $success['user'] = $authUser;
        return $this->successResponse($success, 'success login', 200);
    }
   
=======
            return responseJson(422,'Email Or Password is wrong!');
        }
        $authUser = new AdminResource(Auth::guard('admin')->user());
        $success['token'] = $authUser->createToken('sanctumAuth')->plainTextToken;
        $success['admin'] = $authUser;
        return responseJson(200,'Login Successfully',$success);
    }

>>>>>>> 76ca449e435a5b99e4d28a638752b0890a5c3f91
}
