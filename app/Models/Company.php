<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use HasFactory;
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

    public function scopeFilter($query,$request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->search) {

                $q->whereHas('partner', function($q) use ($request){
                    $q->where('name', 'like', '%' . $request->search . '%');;
                });

                $q->orWhereHas('partner', function($q) use ($request){
                    $q->where('name_e', 'like', '%' . $request->search . '%');;
                });

                $q->orWhere('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
                $q->orWhere('url', 'like', '%' . $request->search . '%');
                $q->orWhere('address', 'like', '%' . $request->search . '%');
                $q->orWhere('phone', 'like', '%' . $request->search . '%');
                $q->orWhere('cr', 'like', '%' . $request->search . '%');
                $q->orWhere('tax_id', 'like', '%' . $request->search . '%');
                $q->orWhere('vat_no', 'like', '%' . $request->search . '%');
                $q->orWhere('email', 'like', '%' . $request->search . '%');
                $q->orWhere('website', 'like', '%' . $request->search . '%');
            }


            if ($request->column_name && $request->column_value) {

                $dataSearch = explode("." , $request->column_name) ;
                if(count($dataSearch) == 1){
                    $q->where($request->column_name , "like" ,  '%' . $request->column_value. '%');
                }

                if( count($dataSearch) == 2 ){
                    $q->whereHas($dataSearch[0], function($q) use ($request , $dataSearch) {
                        $q->where($dataSearch[1], 'like', '%' . $request->column_value . '%');;
                    });
                }

            }

            if ($request->is_default) {
                $q->where('is_default', $request->is_default);
            }
        });
    }

}
