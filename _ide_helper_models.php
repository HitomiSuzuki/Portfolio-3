<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
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
	class Artwork extends \Eloquent {}
}

