<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArtworkRequest;
use App\Http\Requests\UpdateArtworkRequest;
use App\Models\Artwork;

class ArtworkController extends Controller
{
    /**
     * Artwork一覧
     * @return \illyminate\Support\Collection
     */
    public function index()
    {
        return Artwork::orderByDesc('id')->get();
    }

    /**
     * 新規作成
     * @param Request $request
     * @return \Illuminate\Http\Jsonresponse
     */
    public function store(StoreArtworkRequest $request)
    {

        $test = 'ddddd';
        ob_start();
        var_dump($request->title);
        $out = ob_get_contents();
        ob_end_clean();
        file_put_contents('log.php', $out, FILE_APPEND);

        // ディレクトリ名
        $dir = 'sample';

        // sampleディレクトリに画像を保存
        $request->imgURL->storeAs('public/' . $dir, $request->title);

        // ファイル情報をDBに保存
        $artwork = new Artwork();
        $artwork->title = $request->title;
        $artwork->imgURL = 'storage/' . $dir . '/' . $request->title;
        $artwork->save();


        return response()->json('Success');

    
    }

    /**
     * 一件取得
     * @param \App\Models\Artwork
     * @return \Illyminate\Http\Responst
     */
    public function show(Artwork $artwork)
    {
        return response()->json($artwork->toArray());
    }

    /**
     * 更新
     * @param \App\Http\Requests\UpdateArtworkRequest $request
     * @oaram \App\Models\Artwork $artwork
     * @return \Illuminata\Http\Jsonresponse
     */
    public function update(UpdateArtworkRequest $request, Artwork $artwork)
    {
        $artwork->title = $request->title;

        return $artwork->update()
            ? response()->json($artwork)
            : response()->json([], 500);
    }

    /**
     * 削除
     * 
     * @param \App\Models\Artwork $artwork
     * @return \Illuminate\Http\Jsonresponse
     */
    public function destroy(Artwork $artwork)
    {
        return $artwork->delete()
        ? response()->json($artwork)
        : response()->json([], 500);
    }
}
