import React, {useState} from "react";
import {postArtwork} from '../../api/ArtworkAPI';

export const FileUpload = () => { 
    // 画像の情報、タイトルを保持
    const [image, setImage] = useState<FileList | null>();
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!image) return;
        // 新規にFormDataを作成して、画像とタイトルを格納する
        const file = new FormData()
        file.append('imgURL', image[0]);
        file.append('title', title);

        // ファイルが正しくセットされていたらpost
        if(!file) return;
        postArtwork(file)
    }
    

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="file" name="image" onChange={event => setImage(event.target.files)} />
            <input type="text" name="title" onChange={event => setTitle(event.target.value)} />
            <button></button>
        </form>
    )
}