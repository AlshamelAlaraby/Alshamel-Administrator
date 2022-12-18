<?php

namespace App\Models;

use App\Models\Module;
use App\Models\Partner;
use App\Models\Store;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class Company extends Model
{


    use SoftDeletes, LogsActivity, CausesActivity;

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
        return $this->belongsToMany(Module::class, 'company_modules', 'company_id', 'module_id');
    }

    public function stores()
    {
        return $this->hasMany(Store::class);
    }

    public function getPhotoUrlAttribute()
    {
        return Storage::disk("companies")->url($this->logo);
    }

    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = auth()->user()->id ?? 0;
        $activity->causer_type = auth()->user()->role ?? "admin";
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Store')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
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


            if ($request->name) {
                $q->where('name', $request->name);
            }

            if ($request->name_e) {
                $q->where('name_e', $request->name_e);
            }
            if ($request->url) {
                $q->where('url', $request->url);
            }
            if ($request->address) {
                $q->where('address', $request->address);
            }
            if ($request->phone) {
                $q->where('phone', $request->phone);
            }
            if ($request->cr) {
                $q->where('cr', $request->cr);
            }
            if ($request->tax_id) {
                $q->where('tax_id', $request->tax_id);
            }
            if ($request->vat_no) {
                $q->where('vat_no', $request->vat_no);
            }
            if ($request->email) {
                $q->where('email', $request->email);
            }
            if ($request->website) {
                $q->where('website', $request->website);
            }

            if ($request->is_default) {
                $q->where('is_default', $request->is_default);
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

        });
    }

    public function scopeFilterCompanyModules($query,$request)
    {
            if ($request->search)
            {
                return $query->with(['modules'=>function($q) use ($request){
                    $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('name_e', 'like', '%' . $request->search . '%');
                }]);
            }
         return  $query->with('modules');
    }


}
