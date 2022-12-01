<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScreensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('screens', function (Blueprint $table) {
            $table->id();
            $table->string("name" , 100)->unique()->comment("Name Arabic");
            $table->string("name_e" , 100)->unique()->comment("Name English");
            $table->string("title" , 100)->unique()->comment("title Arabic");
            $table->string("title_e" , 100)->unique()->comment("title English");
            $table->unsignedBigInteger('serial_id')->nullable();
            $table->foreign('serial_id')->references('id')->on('serials');
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
        Schema::dropIfExists('screens');
    }
}
