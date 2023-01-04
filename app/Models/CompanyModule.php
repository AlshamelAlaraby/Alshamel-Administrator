<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class CompanyModule extends Model
{
    use LogTrait;

    protected $fillable = [
        'company_id',
        'module_id',
        'start_date',
        'end_date',
        'allowed_users_no',
    ];
    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return LogOptions::defaults()
            ->logAll()
            ->useLogName('Company Module')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }
    public function module()
    {
        return $this->belongsTo(Module::class, 'module_id', 'id');
    }
}
