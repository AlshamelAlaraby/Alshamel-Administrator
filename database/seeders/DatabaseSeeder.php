<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    public function run()
    {
        \App\Models\User::create([
            'name' => 'admin',
            "photo"=> "image.png",
            "mobile"=> "15165315315",
            "email"=> "mrehab9797@gmail.com",
            'password' => Hash::make(124578963),
        ]);
        // \App\Models\User::factory(10)->create();
    }
}
