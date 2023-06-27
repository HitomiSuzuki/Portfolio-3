import React, {useEffect} from "react";
import styled from "styled-components";


type HoverImageProps = {
    imgURL: string;
}

export const Image = (props: HoverImageProps) => {
    const {imgURL} = props;
    
    return (
        <StyledImage src={imgURL}></StyledImage>
    )
}

const StyledImage = styled.img`
    width: calc(100vw * 350 / 1280);
`