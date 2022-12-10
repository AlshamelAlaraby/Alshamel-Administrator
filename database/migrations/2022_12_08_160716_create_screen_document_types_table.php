<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScreenDocumentTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('screen_document_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('screen_id');
            $table->foreignId('document_type_id');
            $table->timestamps();
            $table->foreign('screen_id')->references('id')->on('screens');
            $table->foreign('document_type_id')->references('id')->on('document_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('screens_document_types');
    }
}
