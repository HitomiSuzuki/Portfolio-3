import React from "react";
import styled from "styled-components";
import { SiteTitle } from '../components/atoms/SiteTitle';
import { HoverLink } from '../components/atoms/HoverLink';
import { Header } from '../components/atoms/Header';
import { HoverImage } from '../components/atoms/HoverImage';
import img1 from '../static/img1.jpg';
import img2 from '../static/img2.jpg';
import img3 from '../static/img3.jpg';
import { MouseStalker } from "../components/atoms/MouseStalker";
import { Carousel } from "../components/atoms/Carousel";

export const Top = () => {
    return (
        <>
            <MouseStalker/>
            <Header /> 
            <StyledPage id="title">
                <SiteTitle />
            </StyledPage>
            <StyledPage id="gallery">
                <HoverLink to={'http://google.com'}>text</HoverLink>
                <HoverImage imgURL={img1} />
                <HoverImage imgURL={img2} />
                <HoverImage imgURL={img3} />
                <Carousel imgArray={[img1, img2, img3]}/>
            </StyledPage>
            <StyledPage id="nft"></StyledPage>
            <StyledPage id="bio"></StyledPage>
        </>
    )
}

const StyledPage = styled.div`
    height: 100vh;

    &:nth-of-type(3) {
        background: red;
    }
    &:nth-of-type(4) {
        background: blue;
    }
    &:nth-of-type(5) {
        background: green;
    }
    &:nth-of-type(6) {
        background: violet;
    }
`