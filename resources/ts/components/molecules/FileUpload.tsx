import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import {postArtwork} from '../../api/ArtworkAPI';

export const FileUpload = () => { 
    // 要素取得
    const form = useRef<HTMLFormElement>(null);
    const imgInput = useRef<HTMLInputElement>(null);
    const titleInput = useRef<HTMLInputElement>(null);
    const dropZone = useRef<HTMLDivElement>(null);

    // 画像の情報、タイトルを保持
    const [image, setImage] = useState<File | null>();
    const [title, setTitle] = useState<string>('');
    const [src, setSrc] = useState<string | undefined>('');
    const [typeError, setTypeError] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!image) return;
        // 新規にFormDataを作成して、画像とタイトルを格納する
        const file = new FormData()
        file.append('imgURL', image);
        if(image.type == 'image/jpeg') file.append('title', title + '.jpeg');
        if(image.type == 'image/png') file.append('title', title + '.png');
        if(image.type == 'image/jpg') file.append('title', title + '.jpg');
        

        // ファイルが正しくセットされていたらpost
        if(!file) return;
        postArtwork(file);
    }

    // ドラッグしてエリアに入った時
    const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if(!dropZone.current) return;
        dropZone.current.style.backgroundColor = 'lightGray';
    }

    // ドラッグしてエリアに滞在している時（この後のDropの発火条件）
    const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    // ドロップした時
    const drop = async(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;

        // ファイルタイプが画像かどうか
        if(files[0].type !== 'image/jpeg' && files[0].type !== 'image/jpg' && files[0].type !== 'image/png') {
            setTypeError(true);
            return
        }

        // imageをセット
        setImage(files[0]);

        // プレビュー用の画像を準備
        const prevFile = new FileReader();
        prevFile.readAsDataURL(files[0]);
        prevFile.onload = () => {
            setSrc(prevFile.result?.toString());
        }
        
        // ドロップゾーンの色を戻しておく
        if(!dropZone.current) return;
        dropZone.current.style.background = 'white';
    }

    // ドラッグしてエリアから出た時
    const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if(!dropZone.current) return;
        dropZone.current.style.background = 'white';
    }
    
    // inputをクリックで直接選択した時
    const changeInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        if(!e.target.files) return
        setImage(e.target.files[0]);
    }

    return (
        <StyledForm 
        onSubmit={(e) => handleSubmit(e)} 
        ref={form}
        >
            <StyledDropZone
            onDragEnter={(e) => dragEnter(e)} 
            onDragOver={(e) => dragOver(e)} 
            onDrop={(e) => drop(e)} 
            onDragLeave={(e) => dragLeave(e)}
            ref={dropZone}
            >
                <StyledInputLabel>
                <StyledImgInput 
                ref={imgInput} 
                type="file" 
                name="image" 
                onChange={(e) => changeInput(e)}
                />
                画像をドラッグ＆ドロップ<br />またはクリックで選択してください
                {typeError? <p>アップロードできるのは、jpg,pngファイルのみです</p> : ""}
                </StyledInputLabel>
            </StyledDropZone>
            <StyledTitleInput 
            ref={titleInput} 
            type="text" 
            name="title" 
            onChange={event => setTitle(event.target.value)} 
            />
            <StyledButton type="submit">保存する</StyledButton>

            {!src ? '' : <StyledPrevImg src={src}/>}
        </StyledForm>
    )
}

const StyledForm = styled.form`
    text-align: center;
    width: 440px;
    margin: 0 auto;
`

const StyledDropZone = styled.div`
    background-color: white;
    height: 230px;
    width: 100%;
    border: 3px dashed gray;
    margin: 100px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledInputLabel = styled.label``

const StyledImgInput = styled.input`
    display: none;
`

const StyledTitleInput = styled.input`
    width: 100%;
    margin-top: 20px;
    display: block;
`

const StyledButton = styled.button`
    margin-top: 20px;
    width: 150px;
`

const StyledPrevImg = styled.img`
    width: 440px;
    margin-top: 30px;
`