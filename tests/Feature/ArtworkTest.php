<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Artwork;

class ArtworkTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function 一覧を取得できる(): void
    {
        Artwork::factory()->count(10)->create();

        $response = $this->getJson('api/artwork');

        $response ->assertOk()
                  ->assertJsonCount(10);
                  
    }

    /**
     * @test
     */
    public function 登録することができる(): void
    {
        $data = [
            'title' => 'test title',
            'imgURL' => 'img1.jpg'
        ];

        $response = $this->postJson('api/artwork', $data);

        $response ->assertCreated()
                  ->assertJsonFragment($data);
                  
    }

    /**
     * @test
     */
    public function 更新することができる(): void
    {
        $artwork = Artwork::factory()->create();

        $artwork->title='テストタイトル';

        $response = $this->PatchJson("api/artwork/{$artwork->id}", $artwork->toArray());

        $response->assertOk()
                 ->assertJsonFragment($artwork->toArray());
                  
    }

    /**
     * @test
     */
    public function 削除することができる(): void
    {
        $artwork = Artwork::factory()->count(10)->create();

        $response = $this->deleteJson("api/artwork/20");

        $response ->assertOk();
        $response = $this->getJson("api/artwork");
        $response->assertJsonCount($artwork->count() - 1);
        
    }

    
}
