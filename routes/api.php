<?php

use App\Http\Controllers\Auth\CheckIfValidTokenController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Partner\PartnerController;
use App\Http\Controllers\Serial\SerialController;
use App\Http\Controllers\User\UserController;
//use App\Http\Controllers\Store\StoreController;

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

Route::get('/users', [UserController::class, "index"]);

/*
 * Auth
 */

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [LoginController::class, "login"]);
});

Route::group(['prefix' => 'auth', 'middleware' => 'auth:sanctum'], function () {
    Route::post('/logout', [LogoutController::class, "logout"]);
});

Route::group(['prefix' => 'auth', 'middleware' => 'auth:sanctum'], function () {
    Route::post('/check-token', [CheckIfValidTokenController::class, "checkIsValidToken"]);
});

    Route::group(['prefix' => 'companies'], function () {
        Route::get('', [CompanyController::class, "index"]);
        Route::get('/{id}', [CompanyController::class, "show"]);
        Route::post('', [CompanyController::class, "store"]);
        Route::post('/{id}', [CompanyController::class, "update"]);
        Route::delete('/{id}', [CompanyController::class, "destroy"]);
    });

    Route::group(['prefix' => 'stores'], function () {
        Route::get('', [StoreController::class, "index"]);
        Route::get('/{id}', [StoreController::class, "show"]);
        Route::post('', [StoreController::class, "store"]);
        Route::post('/{id}', [StoreController::class, "update"]);
        Route::delete('/{id}', [StoreController::class, "destroy"]);
    });

    Route::group(['prefix' => 'modules'], function () {
        Route::controller(\App\Http\Controllers\Module\ModuleController::class)->group(function () {
            Route::get('/', 'all')->name('modules.index');
            Route::get('/{id}', 'find');
            Route::post('/', 'create')->name('modules.create');
            Route::put('/{id}', 'update')->name('modules.update');
            Route::delete('/{id}', 'delete')->name('modules.destroy');
            Route::post('/company', 'addModuleToCompany')->name('modules.company.add');
            Route::delete('/{module_id}/company/{company_id}', 'removeModuleFromCompany')->name('modules.company.remove');

        });
    });

    // api op Partners
    Route::group(['prefix' => 'partners'], function () {
        Route::controller(PartnerController::class)->group(function () {
            Route::get('/', 'all')->name('partners.index');
            Route::get('/show/{id}', 'find');
            Route::post('/store', 'store')->name('partners.store');
            Route::put('/update/{id}', 'update')->name('partners.update');
            Route::delete('/delete/{id}', 'delete')->name('partners.destroy');
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

    Route::resource('branches', BranchController::class)->except('create', 'edit');

// api op customers
Route::group(['prefix' => 'partners'], function () {
    Route::controller(PartnerController::class)->group(function () {
        Route::get('/', 'all')->name('partners.index');
        Route::get('/show/{id}', 'find');
        Route::post('/store', 'store')->name('partners.store');
        Route::put('/update/{id}', 'update')->name('partners.update');
        Route::delete('/delete/{id}', 'delete')->name('partners.destroy');
    });

});
