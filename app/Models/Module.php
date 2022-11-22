<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'name_e',
        'parent_id',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    public function parent()
    {
        return $this->hasMany(Module::class, 'parent_id', 'id');
    }

    public function children()
    {
        return $this->belongsTo(Module::class);
    }

    public function companies()
    {
        return $this->belongsToMany(Company::class, 'company_module', 'module_id', 'company_id');
    }

    public function getHaveChildrenAttribute()
    {
        return static::where("parent_id", $this->id)->count() > 0;
    }

}
