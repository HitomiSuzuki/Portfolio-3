import React from "react";
import styled from "styled-components";


type HoverImageProps = {
    imgURL: string;
}

export const HoverImage = (props: HoverImageProps) => {
    const {imgURL} = props;

    return (

        <StyledImage src={imgURL} className='stalkerTarget'></StyledImage>
    )
}

const StyledImage = styled.img`
    width: calc(100vw * 350 / 1280);
`