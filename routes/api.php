<?php

use App\Http\Controllers\Auth\CheckIfValidTokenController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\DocumentType\DocumentTypeController;
use App\Http\Controllers\Partner\PartnerController;
use App\Http\Controllers\Screen\ScreenController;
use App\Http\Controllers\Serial\SerialController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Store\StoreController;
use App\Http\Controllers\Button\ButtonController;
use App\Http\Controllers\Helpfile\HelpfileController;
use App\Http\Controllers\ScreenHelpfile\ScreenHelpfileController;
use App\Http\Controllers\ScreenButton\ScreenButtonController;
use App\Http\Controllers\hotfield\hotfieldController;

use App\Http\Controllers\WorkflowTree\WorkflowTreeController;
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
        Route::get('', [CompanyController::class, "index"])->name('companies.index');
        Route::get('/{id}', [CompanyController::class, "show"])->name('companies.show');
        Route::post('', [CompanyController::class, "store"])->name('companies.store');
        Route::post('/{id}', [CompanyController::class, "update"])->name('companies.update');
        Route::delete('/{id}', [CompanyController::class, "destroy"])->name('companies.delete');
        Route::delete('/logs/{id}',[CompanyController::class, "logs"])->name('companies.logs');
        Route::delete('/screen-setting',[CompanyController::class, "screenSetting"])->name('companies.screenSetting');
        Route::delete('/get-screen-setting/{user_id}/{screen_id}', [CompanyController::class, "getScreenSetting"])->name('companies.getScreenSetting');
    });

    Route::post('/companyModules/{id}', [CompanyController::class, "companyModules"]);

    Route::group(['prefix' => 'stores'], function () {
        Route::get('', [StoreController::class, "index"])->name('stores.index');
        Route::get('/{id}', [StoreController::class, "show"])->name('stores.show');
        Route::post('', [StoreController::class, "store"])->name('stores.store');
        Route::post('/{id}', [StoreController::class, "update"])->name('stores.update');
        Route::delete('/{id}', [StoreController::class, "destroy"])->name('stores.delete');
    });

    Route::group(['prefix' => 'modules'], function () {
        Route::controller(\App\Http\Controllers\Module\ModuleController::class)->group(function () {
            Route::get('/', 'all')->name('modules.index');
            Route::get('/{id}', 'find');
            Route::post('/', 'create')->name('modules.create');
            Route::put('/{id}', 'update')->name('modules.update');
            Route::delete('/{id}', 'delete')->name('modules.destroy');
            Route::post('/company', 'addModuleToCompany')->name('modules.company.add');
            Route::get('/{module_id}/company/{company_id}', 'removeModuleFromCompany')->name('modules.company.remove');
            Route::post('/screen-setting', 'screenSetting')->name('modules.screenSetting');
            Route::get('/get-screen-setting/{user_id}/{screen_id}', 'getScreenSetting')->name('modules.getScreenSetting');
        });
    });




// api of Partners
Route::group(['prefix' => 'partners'], function () {
    Route::controller(PartnerController::class)->group(function () {
        Route::get('/', 'all')->name('partners.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('partners.store');
        Route::put('/{id}', 'update')->name('partners.update');
        Route::delete('/{id}', 'delete')->name('partners.destroy');
        Route::post('/screen-setting', 'screenSetting')->name('partners.screenSetting');
        Route::get('/get-screen-setting/{user_id}/{screen_id}', 'getScreenSetting')->name('partners.getScreenSetting');
        Route::post('/companies', 'companies');
    });
});

// api of screens
Route::group(['prefix' => 'screens'], function () {
    Route::controller(ScreenController::class)->group(function () {
        Route::get('/', 'all')->name('screens.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('screens.store');
        Route::put('/{id}', 'update')->name('screens.update');
        Route::delete('/{id}', 'delete')->name('screens.destroy');

    });
});


// api of helpfiles
Route::group(['prefix' => 'helpfiles'], function () {
    Route::controller(HelpfileController::class)->group(function () {
        Route::get('/', 'all')->name('helpfiles.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('helpfiles.store');
        Route::post('/{id}', 'update')->name('helpfiles.update');
        Route::delete('/{id}', 'delete')->name('helpfiles.destroy');
    });
});

// api of screenhelpfile
Route::group(['prefix' => 'screen-helpfile'], function () {
    Route::controller(ScreenHelpfileController::class)->group(function () {
        Route::get('/', 'all')->name('screenhelpfile.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('screenhelpfile.store');
        Route::post('/{id}', 'update')->name('screenhelpfile.update');
        Route::delete('/{id}', 'delete')->name('screenhelpfile.destroy');
    });
});

// api of screenbutton
Route::group(['prefix' => 'screen-button'], function () {
    Route::controller(ScreenButtonController::class)->group(function () {
        Route::get('/', 'all')->name('screenbutton.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('screenbutton.store');
        Route::post('/{id}', 'update')->name('screenbutton.update');
        Route::delete('/{id}', 'delete')->name('screenbutton.destroy');
    });
});

// api of hotfield
Route::group(['prefix' => 'hotfields'], function () {
    Route::controller(HotfieldController::class)->group(function () {
        Route::get('/', 'all')->name('hotfield.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('hotfield.store');
        Route::post('/{id}', 'update')->name('hotfield.update');
        Route::delete('/{id}', 'delete')->name('hotfield.destroy');
    });
});


// api of WorkflowTree
Route::group(['prefix' => 'workflow-trees'], function () {
    Route::controller(WorkflowTreeController::class)->group(function () {
        Route::get('/', 'all')->name('WorkflowTree.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'store')->name('WorkflowTree.store');
        Route::put('/{id}', 'update')->name('WorkflowTree.update');
        Route::delete('/{id}', 'delete')->name('WorkflowTree.destroy');
    });
});

// // api op serials
//     Route::group(['prefix' => 'serials'], function () {
//         Route::controller(SerialController::class)->group(function () {
//             Route::get('/', 'all')->name('serials.index');
//             Route::get('/show/{id}', 'find');
//             Route::post('/store', 'store')->name('serials.store');
//             Route::put('/update/{id}', 'update')->name('serials.update');
//             Route::delete('/delete/{id}', 'delete')->name('serials.destroy');
//         });
//     });

// api op serials
    Route::group(['prefix' => 'buttons'], function () {
        Route::controller(ButtonController::class)->group(function () {
            Route::get('/', 'all')->name('buttons.index');
            Route::get('/{id}', 'find');
            Route::post('/', 'store')->name('buttons.store');
            Route::post('/{id}', 'update')->name('buttons.update');
            Route::delete('/{id}', 'delete')->name('buttons.destroy');
        });
    });

    Route::resource('branches', BranchController::class)->except('create', 'edit');

    Route::group(['prefix' => 'document-type'], function () {
        Route::controller(DocumentTypeController::class)->group(function () {
            Route::get('/', 'all')->name('modules.index');
            Route::get('/{id}', 'find');
            Route::post('/', 'create')->name('modules.create');
            Route::put('/{id}', 'update')->name('modules.update');
            Route::delete('/{id}', 'delete')->name('modules.destroy');
        });
    });

    Route::group(['prefix' => 'screenDocumentType'], function () {
        Route::post('/add', [ScreenController::class,'addScreenToDocumentType']);
        Route::delete('/remove/{screen_id}/{documentType_id}', [ScreenController::class,'removeScreenFromDocumentType']);
    });
