import React, {useState, useRef} from "react";
import styled from "styled-components";
import { ref, uploadBytes } from "firebase/storage";
import { storage }from '../../firebase';
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/store";
import { addTitle } from "../../features/TitlesSlice";
import { addImage } from "../../features/ImageSlice";

type Item = {
    id: number,
    title: string
}


export const FileUpload = () => { 
    // 要素取得
    const form = useRef<HTMLFormElement>(null);
    const imgInput = useRef<HTMLInputElement>(null);
    const titleInput = useRef<HTMLInputElement>(null);
    const dropZone = useRef<HTMLDivElement>(null);

    // Redux関連
    const titleList = useSelector(state => state.titles);
    const dispatch = useDispatch();

    // 画像の情報、タイトルを保持
    const [image, setImage] = useState<File | undefined>(undefined);
    const [newTitle, setTitle] = useState<string>('');
    const [src, setSrc] = useState<string | undefined>('');
    const [typeError, setTypeError] = useState<boolean>(false);

    // 送信ボタン押した時
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 現在のタイトル群を取得
        

        // 同一タイトルがないかチェック
        if(titleList.some(item => item.title === newTitle)) {
            alert('同一タイトルが存在しています。')
        } else {
            // 拡張子を取得
            const ext = image?.name.split('.').pop();
            console.log("ext" + ext);
            const fileRef = ref(storage, `images/${newTitle}.${ext}`);
            if(image) {
                await uploadBytes(fileRef, image);
                console.log("uploaded!!");
            }

            dispatch(addImage(
                {
                    id: titleList.length,
                    title: `${newTitle}.${ext}`,
                    url: `https://firebasestorage.googleapis.com/v0/b/portfolio-3-2d14e.appspot.com/o/images%2F${newTitle}.${ext}?alt=media`,
                    created_at: new Date()
                }
            ));
        }

        setTitle('');
        setSrc('');
        setImage(undefined);

        console.log("titleList" + titleList);
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
            value={newTitle}
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