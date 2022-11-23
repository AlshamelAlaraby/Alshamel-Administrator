<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use HasFactory;

    protected $guarded = [] ;


    public function PhotoUrl($photo)
    {
        return Storage::disk("companies")->url($photo) ;
    }

}
