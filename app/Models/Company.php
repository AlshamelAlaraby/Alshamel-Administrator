<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class Company extends Model
{
    use HasFactory;
    use SoftDeletes, LogTrait;

    protected $guarded = [];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    public function partner()
    {
        return $this->belongsTo(Partner::class);
    }

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'company_module', 'company_id', 'module_id');
    }

    public function stores()
    {
        return $this->hasMany(Store::class);
    }

    public function getPhotoUrlAttribute()
    {
        return Storage::disk("companies")->url($this->logo);
    }


    public function workflowTrees(){
        return $this->hasMany (WorkflowTree::class);
    }


}
