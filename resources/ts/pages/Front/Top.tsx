import React from "react";
import styled from "styled-components";
import { SiteTitle } from '../../components/atoms/SiteTitle';
import { HoverLink } from '../../components/atoms/HoverLink';
import { Header } from '../../components/atoms/Header';
import { MouseStalker } from "../../components/atoms/MouseStalker";
import { Carousel } from "../../components/atoms/Carousel";
import { AnimateImages } from "../../components/molecules/AnimateImages";
import img1 from '../../static/img1.jpg';
import img2 from '../../static/img2.jpg';
import img3 from '../../static/img3.jpg';
import img4 from '../../static/img4.jpg';
import me from '../../static/me.jpg';
import { TopCarousel } from "../../components/atoms/TopCarousel";
import { NFT } from "../../components/atoms/NFT";
import { BioText } from "../../components/atoms/BioText";
import { Image } from "../../components/atoms/Image";

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
                <PCWrapper>
                    <AnimateImages />
                    <HoverLink to={'/gallery'}>visit gallery</HoverLink>
                </PCWrapper>
                <MobileWrapper>
                    <Carousel imgArray={GalleryImgArray}/>
                </MobileWrapper>
            </StyledSection>
            <StyledSection id="nft">
                <NFT />
                <HoverLink to={'https://opensea.io/ja/he_t0ld_me'}>click here</HoverLink>
            </StyledSection>
            <StyledSection id="bio">
                <Image imgURL={me} />
                <StyledBioTextWrapper>
                    <BioText keyNumber={1}>1991年7月 三重県四日市市生まれ</BioText>
                    <BioText keyNumber={2}>秋田県立国際教養大学中退</BioText>
                    <BioText keyNumber={3}>株式会社amptech(~2022)</BioText>
                    <BioText keyNumber={4}>株式会社フリースタイル(~2023)</BioText>
                </StyledBioTextWrapper>
            </StyledSection>
            <StyledSection id="footer">
                <div>
                    <Image imgURL={img3} />
                    <StyledFooterText>Hitomi OYAMA</StyledFooterText>
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
        @media(max-width: 599px) {
            padding: 0;
        } 
    }
    &#gallery {
        padding: 100px 50px 0 80px;
        @media(max-width: 599px) {
            padding: 0;
        } 
    }
    &#nft {
        padding: 150px  0 0 50px;
        @media(max-width: 599px) {
            padding: 70px 0 0;
        }   
    }
    &#bio {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 200px 60px 0;
        @media(max-width: 599px) {
            display: block;
            padding: 100px 0 0;
            img {
                width: 80%;
            }
        }
    }
    &#footer {
        padding: 300px 60px 100px;
        display: flex;
        justify-content: end;
        @media(max-width: 599px) {
            display: block;
            text-align: center;
            padding: 200px 0 0;
        } 
    }
`

const MobileWrapper = styled.div`
    display: none;
    @media(max-width: 599px) {
        display: block;
    }   
`
const PCWrapper = styled.div`
    display: block;
    @media(max-width: 599px) {
        display: none;
    }   
`

const StyledBioTextWrapper = styled.div`
    text-align: left;
    margin-left: 30px;
    @media(max-width: 599px) {
        margin-left:0;
    } 
`

const StyledFooterText = styled.p`
    margin:0;
    padding-bottom: 150px;
`