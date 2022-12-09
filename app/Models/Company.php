<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'] ;

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
        return Storage::disk("companies")->url($this->logo) ;
    }

}
