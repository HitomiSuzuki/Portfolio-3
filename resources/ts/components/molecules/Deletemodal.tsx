import React, {useEffect} from "react";
import styled from "styled-components";
import { deleteArtwork } from "../../api/ArtworkAPI";
import { useGetArtwork } from "../../queries/ArtworkQuery";
import { Artwork } from "../../type/type";
import { getStorage, ref, deleteObject }from "firebase/storage"; 
import { removeImage } from "../../features/ImageSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/store";

type DeleteModalprops = { 
    currentImage: {title: string, url: string, id: number, created_at: Date};
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setDeletedData: React.Dispatch<React.SetStateAction<Artwork>>
}

export const DeleteModal = (props: DeleteModalprops) => {
    const {currentImage, setShowModal, setDeletedData} = props;
    const storage = getStorage();
    const desertRef = ref(storage, `images/${currentImage.title}`);
    const dispatch = useDispatch();
    const imageList = useSelector(state => state.images);

    const deleteItem = async () => {
        deleteObject(desertRef).then(() => {
            alert("delete" + currentImage.title);
        }).catch((err) => {
            alert('error happens!!');
            console.log(err);
        });

        dispatch(removeImage( currentImage ));

        setShowModal(false);
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

