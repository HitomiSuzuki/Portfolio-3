import React from "react";
import styled from "styled-components";

type DeleteModalprops = { 
    currentImage: {title: string, src: string, id: number};
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteModal = (props: DeleteModalprops) => {
    const {currentImage, setShowModal} = props;

    const deleteItem = () => {
        //画像削除処理を書く
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
    position: absolute;
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

