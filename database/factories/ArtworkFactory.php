<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artwork>
 */
class ArtworkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>$this->faker->realText(rand(15,40)),
            'imgURL'=>$this->faker->imageUrl(1920, 650),
            'created_at'=>now(),
            'updated_at'=>now()
        ];
    }
}
