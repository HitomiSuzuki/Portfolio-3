import React from "react";
import styled from "styled-components";
import { HoverImage } from "../atoms/HoverImage";
import img1 from '../../static/img1.jpg'
import img2 from '../../static/img2.jpg'
import img3 from '../../static/img3.jpg'
import img4 from '../../static/img4.jpg'
import img5 from '../../static/img5.jpg'
import img6 from '../../static/img6.jpg'
import img7 from '../../static/img7.jpg'
import img8 from '../../static/img8.jpg'

export const HoverImages = () => {

    

    return (
        <StyledHoverImagesWrapper>
            <StyledImageWrapper>
                <HoverImage imgURL={img1} to={'/'} />
                <HoverImage imgURL={img2} to={'/'} />
            </StyledImageWrapper>
            <StyledImageWrapper>
                <HoverImage imgURL={img3} to={'/'} />
            </StyledImageWrapper>
            <StyledImageWrapper>
                <HoverImage imgURL={img4} to={'/'} />
                <HoverImage imgURL={img5} to={'/'} />
            </StyledImageWrapper>
            <StyledImageWrapper>
                <HoverImage imgURL={img6} to={'/'} />
            </StyledImageWrapper>
        </StyledHoverImagesWrapper>
    )
}


const StyledHoverImagesWrapper = styled.div`
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