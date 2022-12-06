<?php

namespace App\Providers;

use App\Repositories\Branch\BranchRepository;
use App\Repositories\Branch\BranchRepositoryInterface;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Partner\PartnerRepository;
use App\Repositories\Partner\PartnerRepositoryInterface;
use App\Repositories\Serial\SerialRepository;
use App\Repositories\Serial\SerialRepositoryInterface;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\Company\CompanyRepositoryInterface;
use App\Repositories\Store\StoreRepository;
use App\Repositories\Store\StoreRepositoryInterface;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use App\Repositories\Module\ModuleInterface;
use App\Repositories\Module\ModuleRepository;
use App\Repositories\Screen\ScreenRepository;
use App\Repositories\Screen\ScreenRepositoryInterface;
use App\Repositories\Helpfile\HelpfileRepositoryInterface;
use App\Repositories\Helpfile\HelpfileRepository;
use App\Repositories\WorkflowTree\WorkflowTreeRepository;
use App\Repositories\WorkflowTree\WorkflowTreeRepositoryInterface;
use App\Repositories\Button\ButtonRepository;
use App\Repositories\Button\ButtonRepositoryInterface;
use App\Repositories\ScreenHelpfile\ScreenHelpfileRepository;
use App\Repositories\ScreenHelpfile\ScreenHelpfileRepositoryInterface;
use App\Repositories\ScreenButton\ScreenButtonRepository;
use App\Repositories\ScreenButton\ScreenButtonRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);

        $this->app->bind(PartnerRepositoryInterface::class, PartnerRepository::class);

        $this->app->bind(ScreenRepositoryInterface::class, ScreenRepository::class);

        $this->app->bind(HelpfileRepositoryInterface::class, HelpfileRepository::class);

        $this->app->bind(WorkflowTreeRepositoryInterface::class, WorkflowTreeRepository::class);

        $this->app->bind(SerialRepositoryInterface::class, SerialRepository::class);

        $this->app->bind(CompanyRepositoryInterface::class, CompanyRepository::class);

        $this->app->bind(StoreRepositoryInterface::class, StoreRepository::class);

        $this->app->bind(ModuleInterface::class, ModuleRepository::class);

        $this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);

        $this->app->bind(ButtonRepositoryInterface::class, ButtonRepository::class);

        $this->app->bind(ScreenHelpfileRepositoryInterface::class, ScreenHelpfileRepository::class);

        $this->app->bind(ScreenButtonRepositoryInterface::class, ScreenButtonRepository::class);

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
