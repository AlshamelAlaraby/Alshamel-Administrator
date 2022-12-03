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
        $this->call([ModuleSeeder::class,]);
        $this->call([UserSeeder::class,]);
        $this->call([AdminSeeder::class,]);
        \App\Models\User::create([
            'name' => 'admin',
            "email"=> "mrehab9797@gmail.com",
            'password' => Hash::make(124578963),
        ]);
    }
}
