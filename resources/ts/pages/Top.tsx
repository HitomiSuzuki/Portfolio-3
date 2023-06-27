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
import me from '../static/me.jpg';
import { TopCarousel } from "../components/atoms/TopCarousel";
import { NFT } from "../components/atoms/NFT";
import { BioText } from "../components/atoms/BioText";
import { Image } from "../components/atoms/Image";

export const Top = () => {
    const MainImgArray = [img1, img2, img3]
    const GalleryImgArray = [img1, img2, img3, img4]

    return (
        <>
            <MouseStalker/>
            <Header /> 
            <StyledSection id="title">
                <SiteTitle />
                <TopCarousel imgArray={MainImgArray}/>
            </StyledSection>
            <StyledSection id="gallery">
                <HoverImages />
                <HoverLink to={'/'}>visit gallery</HoverLink>
                <MobileWrapper>
                    <Carousel imgArray={GalleryImgArray}/>
                </MobileWrapper>
            </StyledSection>
            <StyledSection id="nft">
                <NFT />
                <HoverLink to={'/'}>click here</HoverLink>
                <MobileWrapper>
                    <CarouselModal imgArray={[img1, img2, img3]} currentImg={img1} />
                </MobileWrapper>
            </StyledSection>
            <StyledSection id="bio">
                <Image imgURL={me} />
                <StyledBioTextWrapper>
                    <BioText key={1}>1991年7月 三重県四日市市生まれ</BioText>
                    <BioText key={2}>秋田県立国際教養大学中退</BioText>
                    <BioText key={3}>株式会社amptech(~2022)</BioText>
                    <BioText key={4}>株式会社フリースタイル(~2023)</BioText>
                </StyledBioTextWrapper>
            </StyledSection>
            <StyledSection id="footer">
                <div>
                    <Image imgURL={img3} />
                    <p>Hitomi OYAMA</p>
                </div>
            </StyledSection>
        </>
    )
}

const StyledSection = styled.section`
    text-align: center;
    background: yellow;

    &#title {
        padding: 0 0 0 50px;
    }
    &#bio {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 200px 0;
    }
    &#nft {
        padding: 150px  60px 0;
    }
    &#gallery {
        padding: 100px 60px 0;
    }
    &#footer {
        padding: 300px 60px 100px;
        display: flex;
        justify-content: end;
    }
`

const MobileWrapper = styled.div`
    display: none;
    @media(max-width: 599px) {
        display: block;
    }   
`

const StyledBioTextWrapper = styled.div`
    text-align: left;
    margin-left: 30px;
`