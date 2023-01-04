<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory, LogTrait;

    protected $fillable = [
        'name',
        'name_e',
        'parent_id',
        'is_active',
    ];
    protected $hidden = ['pivot'];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    protected $appends = ["haveChildren"];


    public function parent()
    {
        return $this->hasMany(Module::class, 'parent_id', 'id');
    }

    public function children()
    {
        return $this->belongsTo(Module::class, 'parent_id', 'id');
    }

    public function companies()
    {
        return $this->belongsToMany(Company::class, 'company_modules', 'module_id', 'company_id');
    }

    public function workFlows()
    {
        return $this->hasMany(WorkflowTree::class);
    }


    public function getHaveChildrenAttribute()
    {
        $hasChildren = $this->workFlows()->count() > 0 || $this->companies()->count() > 0 || $this->children()->count() > 0;
        return $hasChildren;
    }
}
