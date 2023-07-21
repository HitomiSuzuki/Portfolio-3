import React, { useState } from "react";
import styled from "styled-components";
import { AdminHeader } from '../../components/atoms/AdminHeader';
import { DragAndDrop } from "../../components/molecules/DragAndDrop";
import { usePostArtwork } from "../../queries/ArtworkQuery";
import { FileUpload } from "../../components/molecules/FileUpload";
 
export const NewArtwork = () => {

    const [title, setTitle] = useState('');
    const [imgURL, setImgURL] = useState<FormData>();

    const postArtwork = usePostArtwork();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postArtwork.mutate(imgURL)
    }


    return (
        <>
            <AdminHeader />
            <FileUpload />
            <StyledNewArtworkWrapper onSubmit={handleSubmit} encType="multipart/form-data">
                <DragAndDrop setImgURL={setImgURL}></DragAndDrop>
                <StyledArtworkTitle 
                    type="text"
                    placeholder="タイトルを入力してください"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="title"
                />
                <StyledSubmitButton type='submit'>保存する</StyledSubmitButton>
            </StyledNewArtworkWrapper>
        </>
    )
}

const StyledNewArtworkWrapper = styled.form`
    margin: 100px 0 0;
`

const StyledArtworkTitle = styled.input``

const StyledSubmitButton = styled.button`
`