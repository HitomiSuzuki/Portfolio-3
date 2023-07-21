import React, {useState, useRef} from "react";
import axios from 'axios';

export const FileUpload = () => {
    // const imgForm = useRef<HTMLFormElement>(null);
    // const [fileInfo, setFile] = useState<{object: File, base64data: string}[]>([]);
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(fileInfo)

    //     const data = fileInfo[0].base64data.replace(/data:.*\/.*;base64,/, '');
    //     console.log(data)
    //     axios.post('/api/artwork',  { title: "aaa", imgURL: fileInfo[0].base64data.replace(/data:.*\/.*;base64,/, '') })
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }
    // const handleChangeaInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    //     //ファイル情報を読み込む
    //     setFile((fileInfo) => {
    //         if(!event.target.files) return [];
    //         return [{ ...fileInfo[0], object: event.target.files[0] }]
    //     });
    //     const reader = new FileReader()
    //     // ファイルを読み込み終わったタイミングで実行するイベントハンドラー
    //     reader.onload = (e) => {
    //         //base64形式の画像データをfileInfoに格納
    //         setFile((fileInfo) =>{
    //             if(!e.target?.result) return [];
    //             return [{ ...fileInfo[0], base64data: e.target.result.toString() }]
    //         });
    //     }
    //     // ファイルを読み込む
    //     // 読み込まれたファイルはデータURL形式で受け取れる（上記onload参照）
    //     if(!event.target.files) return;
    //     const dataURL = reader.readAsDataURL(event.target.files[0])
    // }   

    const [image, setImage] = useState<FileList | null>();
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!image) return;
        const file = new FormData()
        file.append('imgURL', image[0]);
        file.append('title', title)

        axios.post('/api/artwork', file, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        // .then(response => {
        //     console.log(response)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }
    

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="file" name="image" onChange={event => setImage(event.target.files)} />
            <input type="text" name="title" onChange={event => setTitle(event.target.value)} />
            <button></button>
        </form>
    )
}