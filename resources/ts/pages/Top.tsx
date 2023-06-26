import React from "react";
import styled from "styled-components";
import { SiteTitle } from '../components/atoms/SiteTitle';
import { HoverLink } from '../components/atoms/HoverLink';
import { Header } from '../components/atoms/Header';
import { HoverImage } from '../components/atoms/HoverImage';
import { MouseStalker } from "../components/atoms/MouseStalker";
import { Carousel } from "../components/atoms/Carousel";
import { CarouselModal } from "../components/molecules/CarouselModal";
import { HoverImages } from "../components/molecules/HoverImages";
import img1 from '../static/img1.jpg';
import img2 from '../static/img2.jpg';
import img3 from '../static/img3.jpg';
import img4 from '../static/img4.jpg';
import img5 from '../static/img5.jpg';
import img6 from '../static/img6.jpg';
import img7 from '../static/img7.jpg';
import img8 from '../static/img8.jpg';
import { TopCarousel } from "../components/atoms/TopCarousel";

export const Top = () => {
    const MainImgArray = [img1, img2, img3, img4, img5, img6, img7, img8]
    const GalleryImgArray = [img1, img2, img3, img4]

    return (
        <>
            <MouseStalker/>
            <Header /> 
            <StyledPage id="title">
                <SiteTitle />
                <TopCarousel imgArray={MainImgArray}/>
            </StyledPage>
            <StyledPage id="gallery">
                <HoverImages />
                <MobileWrapper>
                    <Carousel imgArray={GalleryImgArray}/>
                </MobileWrapper>
            </StyledPage>
            <StyledPage id="nft">
                <MobileWrapper>
                    <CarouselModal imgArray={[img1, img2, img3]} currentImg={img1} />
                </MobileWrapper>
            </StyledPage>
            <StyledPage id="bio"></StyledPage>
        </>
    )
}

const StyledPage = styled.div`
    height: 100vh;
    margin: 0 40px 0 60px;

    &:nth-of-type(3) {
        margin: 0 0 0 50px;
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

const MobileWrapper = styled.div`
    @media(max-width: 599px) {
        display: block;
    }   
`