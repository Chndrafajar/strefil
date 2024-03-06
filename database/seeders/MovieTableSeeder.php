<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com',
                'thumbnail' => 'https://www.youtube.com',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Flash',
                'slug' => 'the-flash',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com',
                'thumbnail' => 'https://www.youtube.com',
                'rating' => 9.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Hulk',
                'slug' => 'the-hulk',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com',
                'thumbnail' => 'https://www.youtube.com',
                'rating' => 9.0,
                'is_featured' => 0,
            ]
        ];
        Movie::insert($movies);
    }
}
