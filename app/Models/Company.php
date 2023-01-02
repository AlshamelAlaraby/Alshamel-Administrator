<?php

namespace App\Models;

use App\Traits\LogTrait;
use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class Company extends Model implements \Spatie\MediaLibrary\HasMedia

{
    use HasFactory, SoftDeletes, LogTrait, MediaTrait;

    protected $guarded = [];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    // relations
    public function partner()
    {
        return $this->belongsTo(Partner::class);
    }

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'company_modules', 'company_id', 'module_id');
    }

    public function stores()
    {
        return $this->hasMany(Store::class);
    }

    public function workFlows()
    {
        return $this->hasMany(WorkflowTree::class);
    }

    public function branches()
    {
        return $this->hasMany(Branch::class);
    }

    public function hasChildren()
    {
        $hasChildren = $this->branches()->count() > 0 || $this->workFlows()->count() > 0 || $this->stores()->count() > 0;
        return $hasChildren;
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Company')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
