import React, {useEffect} from "react";
import styled from "styled-components";
import { deleteArtwork } from "../../api/ArtworkAPI";
import { useGetArtwork } from "../../queries/ArtworkQuery";
import { Artwork } from "../../type/type";

type DeleteModalprops = { 
    currentImage: {title: string, imgURL: string, id: number, created_at: Date, updated_at: Date};
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setDeletedData: React.Dispatch<React.SetStateAction<Artwork>>
}

export const DeleteModal = (props: DeleteModalprops) => {
    const {currentImage, setShowModal, setDeletedData} = props;

    const deleteItem = async () => {
        const data = await deleteArtwork(currentImage.id)
        if(!data) return
        setDeletedData(data);
    }

    return (
        <>
            <StyledDeleteModalBg onClick={() => setShowModal(false)}></StyledDeleteModalBg>
            <StyledDeleteModalWrapper>
                You are going to delete {currentImage.title}. <br/> Are you sure ?
                <StyledButtonWrapper>  
                    <StyledDeleteModalButton onClick={() => setShowModal(false)}>cancel</StyledDeleteModalButton>
                    <StyledDeleteModalButton onClick={() => deleteItem()}>delete</StyledDeleteModalButton>
                </StyledButtonWrapper>
            </StyledDeleteModalWrapper>
        </>
    )
}

const StyledDeleteModalBg = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: black;
    opacity: 0.6;
    top: 0;
    left: 0;
`

const StyledDeleteModalWrapper = styled.div`
    position: fixed;
    width: 80%;
    max-width: 300px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: lightgray;
    padding: 100px;
`

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
`

const StyledDeleteModalButton = styled.button`
    width: 45%;
    height: 30px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

