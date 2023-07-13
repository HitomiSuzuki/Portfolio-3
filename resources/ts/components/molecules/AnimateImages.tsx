import React from "react";
import styled from "styled-components";
import { AnimateImage } from "../atoms/AnimateImage";
import img1 from '../../static/img1.jpg'
import img2 from '../../static/img2.jpg'
import img3 from '../../static/img3.jpg'
import img4 from '../../static/img4.jpg'
import img5 from '../../static/img5.jpg'
import img6 from '../../static/img6.jpg'

export const AnimateImages = () => {
    
    return (
        <StyledAnimateImagesWrapper>
            <StyledImageWrapper>
                <AnimateImage imgURL={img1} to={"/gallery"} state={{ imgURL: img1 }} />
                <AnimateImage imgURL={img2} to={"/gallery"} state={{ imgURL: img2 }} />
            </StyledImageWrapper>
            <StyledImageWrapper>
                <AnimateImage imgURL={img3} to={"/gallery"} state={{ imgURL: img3 }} />
            </StyledImageWrapper>
            <StyledImageWrapper>
                <AnimateImage imgURL={img4} to={"/gallery"} state={{ imgURL: img4 }} />
                <AnimateImage imgURL={img5} to={"/gallery"} state={{ imgURL: img5 }} />
            </StyledImageWrapper>
            <StyledImageWrapper>
                <AnimateImage imgURL={img6} to={"/gallery"} state={{ imgURL: img6 }} />
            </StyledImageWrapper>
        </StyledAnimateImagesWrapper>
    )
}


const StyledAnimateImagesWrapper = styled.div`
    padding-top: 80px;
`
const StyledImageWrapper = styled.div`
    position: relative;

    &:nth-of-type(2n + 1) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            &:nth-of-type(2n + 1)  {
                position: relative;
                top: -80px;
            }
            &:nth-of-type(2n) {
                position: relative;
                bottom: -80px;
            }
        }
    }

    &:nth-of-type(2n) {
        text-align: center;
    }
`