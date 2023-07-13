import React, { useState } from "react";
import styled from "styled-components";
import { AdminHeader } from '../../components/atoms/AdminHeader';
import { DragAndDrop } from "../../components/molecules/DragAndDrop";
import { usePostArtwork } from "../../queries/ArtworkQuery";
 
export const NewArtwork = () => {

    const [title, setTitle] = useState('');
    const [imgURL, setImgURL] = useState('');

    const postArtwork = usePostArtwork();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postArtwork.mutate({title, imgURL})
    }


    return (
        <>
            <AdminHeader />
            <StyledNewArtworkWrapper onSubmit={handleSubmit}>
                <DragAndDrop setImgURL={setImgURL}></DragAndDrop>
                <StyledArtworkTitle 
                    type="text"
                    placeholder="タイトルを入力してください"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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