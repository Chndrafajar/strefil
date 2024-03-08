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
                'thumbnail' => 'http://4.bp.blogspot.com/-10_8gkNEvVI/U5prO0CRsAI/AAAAAAAAA4w/nXOosOwqxT4/s1600/Batman+2.jpg',
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Flash',
                'slug' => 'the-flash',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com',
                'thumbnail' => 'https://www.themoviedb.org/t/p/original/Avyf62o1hPWFVa1A9AU8zg5xB9p.jpg',
                'rating' => 4.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Hulk',
                'slug' => 'the-hulk',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com',
                'thumbnail' => 'https://tse2.mm.bing.net/th?id=OIP.VEkbvGULQXLGMJY3kLYrbwHaEo&pid=Api&P=0&h=180',
                'rating' => 4.0,
                'is_featured' => 0,
            ]
        ];
        Movie::insert($movies);
    }
}
