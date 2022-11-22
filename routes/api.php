<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Store\StoreController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->group(function () {
    
    Route::group(['prefix'=>'companies'],function(){
        Route::get('',[CompanyController::class,"index"]);
        Route::get('/{id}',[CompanyController::class,"show"]);
        Route::post('',[CompanyController::class,"store"]);
        Route::post('/{id}',[CompanyController::class,"update"]);
        Route::delete('/{id}',[CompanyController::class,"destroy"]);
    });
    
});

/*
 * Auth
 */
Route::group(['prefix'=>'auth'],function(){
    
    Route::post('/login',[LoginController::class,"login"]);
});





