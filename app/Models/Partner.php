<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Partner extends Model
{
    use SoftDeletes;


    public Const ACTIVE = 'active';
    public Const INACTIVE = 'inactive';

    protected $table = 'partners';
    protected $fillable = [
        'name',
        'name_e',
        'is_active',
        'email',
        'password',
        'mobile_no',
    ];


    /**
     * this method used to make filter of query
     * @param Query  $query
     * @param $request
     * @return $query
     */
    public function scopeFilter($query,$request)
    {
        return $query->where(function ($q) use ($request) {
            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
                $q->orWhere('mobile_no', 'like', '%' . $request->search . '%');
            }

            if ($request->name) {
                $q->orWhere('name', 'like', '%' . $request->name . '%');
            }

            if ($request->name_e) {
                $q->orWhere('name_e', 'like', '%' . $request->name_e . '%');
            }

            if ($request->email) {
                $q->orWhere('email', 'like', '%' . $request->email . '%');
            }

            if ($request->mobile_no) {
                $q->orWhere('mobile_no', 'like', '%' . $request->moblie_no . '%');
            }

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }
        });
    }

}
