<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBranchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


//        Schema::create('companies', function (Blueprint $table) {
//            $table->id();
//            $table->string ('name');
//            $table->string ('name_e');
//            $table->boolean ('is_active')->default (false)->comment ('1=Active, 0=Not Active');
//            $table->timestamps();
//        });

        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->foreignId ('company_id')->nullable ()->constrained ('companies');
            $table->string ('name');
            $table->string ('name_e');
            $table->boolean ('is_active')->default (false)->comment ('1=Active, 0=Not Active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branches');
    }
}
