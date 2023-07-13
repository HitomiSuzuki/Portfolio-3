import React, {useRef, createRef, RefObject} from "react";
import styled from "styled-components";

type HoverImageProps = {
    image: {title: string, src: string, id: number};
    setCurrentImage: React.Dispatch<React.SetStateAction<{title: string; src: string; id: number;}>>;
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
        setCurrentImage({title: image.title, src: image.src, id: image.id})
        setShowModal(true);
    }

    return (
            
        <StyledHoverImageItem  onMouseEnter={() => toggleOverlay()} onMouseLeave={() => toggleOverlay()}>
            <StyledHoverImage src={image.src}/>
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
    background: green;
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