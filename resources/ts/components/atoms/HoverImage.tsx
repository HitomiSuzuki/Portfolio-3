import React, {useRef, createRef, RefObject} from "react";
import styled from "styled-components";
import { Artwork } from "../../type/type";

type HoverImageProps = {
    image: Artwork;
    setCurrentImage: React.Dispatch<React.SetStateAction<Artwork>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HoverImage = (props: HoverImageProps) => {
    const{image, setCurrentImage, setShowModal} = props;

    // 親要素の中で配列になるので、Refに数字を割り当てる
    const targetOverlay = {
        [image.id]: useRef<HTMLParagraphElement>(null)
    }

    // オーバーレイを表示非表示
    const toggleOverlay = () => {
        targetOverlay[image.id].current?.classList.contains('show') ? targetOverlay[image.id].current?.classList.remove('show') :targetOverlay[image.id].current?.classList.add('show');
    }

    // モーダルを表示非表示
    const showModal = () => {
        // 親要素から渡されたsetStateたち
        setCurrentImage({title: image.title, imgURL: image.imgURL, id: image.id, created_at: image.created_at, updated_at: image.updated_at})
        setShowModal(true);
    }

    return (
            
        <StyledHoverImageItem  onMouseEnter={() => toggleOverlay()} onMouseLeave={() => toggleOverlay()}>
            <StyledHoverImage src={image.imgURL}/>
            <StyledHoverImageOverlay ref={targetOverlay[image.id]}>
                <StyledDeleteButton type="button" onClick={() => showModal()}>Delete</StyledDeleteButton>
            </StyledHoverImageOverlay>
        </StyledHoverImageItem>

    )
}


const StyledHoverImageItem = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
`

const StyledHoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`

const StyledHoverImageOverlay = styled.div`
    position: absolute;
    top: -100%;
    left: 0;
    transition: all 0.1s ease-in-out;
    background: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &.show {
        top: 0;
    }
`

const StyledDeleteButton = styled.button`
    display: block;
    margin: 0 auto;
`