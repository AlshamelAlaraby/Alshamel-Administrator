<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Serial\SerialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users',[UserController::class,"index"]);

/*
 * Auth
 */
Route::group(['prefix'=>'auth'],function(){
    Route::post('/login',[LoginController::class,"login"]);
});




// api op customers
Route::group(['prefix' => 'customers'], function () {
    Route::controller(CustomerController::class)->group(function () {
        Route::get('/', 'all')->name('customers.index');
        Route::get('/show/{id}', 'find');
        Route::post('/store', 'store')->name('customers.store');
        Route::put('/update/{id}', 'update')->name('customers.update');
        Route::delete('/delete/{id}', 'delete')->name('customers.destroy');
    });
});

// api op serials
Route::group(['prefix' => 'serials'], function () {
    Route::controller(SerialController::class)->group(function () {
        Route::get('/', 'all')->name('serials.index');
        Route::get('/show/{id}', 'find');
        Route::post('/store', 'store')->name('serials.store');
        Route::put('/update/{id}', 'update')->name('serials.update');
        Route::delete('/delete/{id}', 'delete')->name('serials.destroy');
    });
});

