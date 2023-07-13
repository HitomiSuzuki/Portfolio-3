import React, {useState, createRef, RefObject} from "react";
import styled from "styled-components";
import { HoverImage } from "../atoms/HoverImage";
import { TitleInput } from "../atoms/TitleInput";

type HoverImageProps = {
    images: {title: string, src: string, id: number}[];
    setCurrentImage: React.Dispatch<React.SetStateAction<{title: string; src: string; id: number;}>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HoverImages = (props: HoverImageProps) => {
    const{images, setCurrentImage, setShowModal} = props;
 


    return (
        <StyledHoverImageList>
            {images.map((img, i) => {
                return (
                    <StyledHoverImageItem key={i}>
                        <HoverImage setCurrentImage={setCurrentImage} setShowModal={setShowModal} image={img}/>
                        <TitleInput img={img} />
                    </StyledHoverImageItem>
                )
            })}
        </StyledHoverImageList>
    )
}

const StyledHoverImageList = styled.ul`
    list-style: none;
    margin: 200px 110px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const StyledHoverImageItem = styled.div`
    width: 22%;
    margin: 20px 1.5%;
`

