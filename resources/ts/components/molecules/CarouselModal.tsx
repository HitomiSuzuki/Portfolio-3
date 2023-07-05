import React, {useRef} from "react";
import styled from "styled-components";
import { Carousel } from "../atoms/Carousel";
import close from "../../static/close.png";

/**
 * @param {BioTextProps} props - プロパティ
 * @property {string[]} imgArray - 画像の配列
 * @property {string} currentImg - 現在表示されている画像
 */

type CarouselModalType = {
    imgArray: string[],
    currentImg: string
}

export const CarouselModal = (props: CarouselModalType) => {
    const modalBg = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        if(!modalBg.current) {
            return
        }
        modalBg.current.classList.add('close');
        
    }

    const {imgArray, currentImg} = props;
    return (
        <ModalBg ref={modalBg}>
            <ModalCloseButton onClick={() => closeModal()}></ModalCloseButton>
            <Carousel imgArray={imgArray} />
        </ModalBg>
    )
}

const ModalBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: relative;

    &.close {
        display: none;
    }
`

const ModalCloseButton = styled.div`
    &::before {
        position: absolute;
        content: '';
        top 20px;
        right: 0;
        background-image: url(${close});
        width: 70px;
        height: 66px;
        z-index: 100;
    }
`