import React, {useCallback, useState} from "react";
import {useDropzone, FileRejection, FileWithPath} from 'react-dropzone'
import styled from "styled-components";

type DragAndDropProps = {
    setImgURL:  React.Dispatch<React.SetStateAction<FormData | undefined>>;
}

export const DragAndDrop = (props: DragAndDropProps) => {
    const {setImgURL} = props;

    // ファイル情報を保持
    const [file, setFile] = useState<FileWithPath>();
    // エラーメッセージを保持
    const [errorMsg, setErrorMsg] = useState<string>('');

    // ドラッグされたアイテムが画像だった場合の処理
    const onDropAccepted = useCallback((acceptedFiles: FileWithPath[]) => {
      setErrorMsg('');
      setFile(acceptedFiles[0]);
      
      
      const formData = new FormData();
      formData.append('imgURL', acceptedFiles[0]);
      console.log(formData);
      setImgURL(formData);
    }, [])

    // ドラッグされたアイテムが画像以外だった場合の処理
    const onDropRejected = useCallback((files: FileRejection[]) => {
        console.log('rejected files', files);
        setErrorMsg('読み取れない形式のファイルです');
      }, []);

    //ドラッグ&ドロップ時 
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        maxFiles:1, 
        onDropAccepted, 
        onDropRejected,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        }
    })
  
    return (
        <>
        <StyledDragAndDropArea {...getRootProps()}>
            <input {...getInputProps()} name="image" type="file"/>
            {
            isDragActive ?
                <StyledGuideText>Drop the files here ...</StyledGuideText> :
                <StyledGuideText>Drag 'n' drop some files here, or click to select files</StyledGuideText>
            }

        </StyledDragAndDropArea>
        {file !== undefined ? <StyledDroppedItem>{file.path}</StyledDroppedItem> : ''}
        {errorMsg !== '' ? <StyledErrorMessage>{errorMsg}</StyledErrorMessage> : ''}
        </>
    )
  }

const StyledDragAndDropArea = styled.div`
    width: 80vw;
    max-width: 440px;
    height: 60vh;
    max-height: 230px;
    background-color: lightGray;
    border: 2px dashed gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

const StyledGuideText = styled.p`
    color: gray;
`

const StyledDroppedItem = styled.div`
  display: block;
  padding: 10px;
  border: 1px solid gray;
  max-width: 440px;
  object-fit: content;
  object-position: top;
  margin: 30px auto 0;
`

const StyledErrorMessage = styled.p`
  margin: 30px 0 0;
  text-align: center;
`