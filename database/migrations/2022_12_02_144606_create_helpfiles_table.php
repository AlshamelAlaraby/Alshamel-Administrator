<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHelpfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('helpfiles', function (Blueprint $table) {
            $table->id();
            $table->string("name" , 100)->unique()->comment("Name Arabic");
            $table->string("name_e" , 100)->unique()->comment("Name English");
            $table->string("url" , 200)->unique()->comment("مسار الشرح");
            $table->softDeletes();
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
        Schema::dropIfExists('helpfiles');
    }
}
