<?php

use App\Http\Controllers\Auth\LoginController;

use App\Http\Controllers\Branch\BranchController;
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




Route::group(['prefix'=>'companies'],function(){
    Route::get('',[CompanyController::class,"index"]);
    Route::get('/{id}',[CompanyController::class,"show"]);
    Route::post('',[CompanyController::class,"store"]);
    Route::post('/{id}',[CompanyController::class,"update"]);
    Route::delete('/{id}',[CompanyController::class,"destroy"]);
});
Route::group(['prefix'=>'stores'],function(){
    Route::get('',[StoreController::class,"index"]);
    Route::get('/{id}',[StoreController::class,"show"]);
    Route::post('',[StoreController::class,"store"]);
    Route::post('/{id}',[StoreController::class,"update"]);
    Route::delete('/{id}',[StoreController::class,"destroy"]);
});



Route::middleware('auth:sanctum')->group(function () {
});


Route::get('/users', [UserController::class, "index"]);


/*
 * Auth
 */
Route::group(['prefix'=>'auth'],function(){
    
    Route::post('/login',[LoginController::class,"login"]);
Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [LoginController::class, "login"]);
});

});


Route::group(['prefix' => 'modules'], function () {
    Route::controller(\App\Http\Controllers\Module\ModuleController::class)->group(function () {
        Route::get('/', 'all')->name('modules.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('modules.create');
        Route::put('/{id}', 'update')->name('modules.update');
        Route::delete('/{id}', 'delete')->name('modules.destroy');
        // Route::post('/{module_id}/company/{company_id}', 'addModuleToCompany')->name('modules.company.add');
        // Route::delete('/{module_id}/company/{company_id}', 'removeModuleFromCompany')->name('modules.company.remove');

    });
});


Route::resource ('branches',BranchController::class)->except ('create','edit');






