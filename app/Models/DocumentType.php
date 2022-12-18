<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'name_e',
        'is_default',
    ];


    public function screens()
    {
        return $this->belongsToMany(Screen::class,'screen_document_types','documentType_id','screen_id','id','id');
    }

    public function scopeFilter($query,$request)
    {
        return $query->where(function ($q) use ($request) {
            if ($request->search)
            {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }
            if ($request->is_default) {
                $q->where('is_default', $request->is_default);
            }
        });
    }




}
