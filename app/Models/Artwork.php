<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Artwork
 *
 * @property int $id
 * @property string $title
 * @property string $imgURL
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\ArtworkFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork query()
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork whereImgURL($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Artwork whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Artwork extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'imgURL'
    ];
}
