<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function PhotoUrl($photo)
    {
        return Storage::disk("companies")->url($photo);
    }

    // relations

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'company_module', 'company_id', 'module_id');
    }

}
