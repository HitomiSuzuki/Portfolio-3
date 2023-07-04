import React, {useRef, useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from '../static/img1.jpg';
import img2 from '../static/img2.jpg';
import img3 from '../static/img3.jpg';
import img4 from '../static/img4.jpg';
import img5 from '../static/img5.jpg';
import img6 from '../static/img6.jpg';
import img7 from '../static/img7.jpg';
import img8 from '../static/img8.jpg';


export const Gallery = () => {
    const artworkDisplay = useRef<HTMLImageElement>(null);
    let [artworkUrl, setArtworkUrl] = useState<string>('');
    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const clickArtworkName = (imgURL: string) => {
        if(!artworkDisplay.current) {
            return
        }
        artworkDisplay.current.src = imgURL;
        setArtworkUrl(imgURL);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <StyledGalleryWrapper>
            <StyledBackToTopLink to='/'>back to top</StyledBackToTopLink>
            <StyledArtworkList>
                <StyledArtworkItem onClick={() => clickArtworkName(img1)}>1</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img2)}>2</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img3)}>3</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img4)}>4</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img5)}>5</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img6)}>6</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img7)}>7</StyledArtworkItem>
                <StyledArtworkItem onClick={() => clickArtworkName(img8)}>8</StyledArtworkItem>
                
            </StyledArtworkList>

            <StyledArtworkWrapper>
                <StyledArtworkDisplay src='' ref={artworkDisplay}></StyledArtworkDisplay>
                {artworkUrl !== '' ? <StyledArtworkLargerButton onClick={() => toggleModal()}/>: ''}
            </StyledArtworkWrapper>

            {isModalOpen ? (
                <StyledModalWrapper>
                    <StyledModalBg onClick={() => toggleModal()}/>
                    <StyledLargeArtworkWrapper>
                        <StyledLargeArtwork src={artworkUrl} />
                    </StyledLargeArtworkWrapper>
                    <StyledArtworkSmallerButton  onClick={() => toggleModal()}/>
                </StyledModalWrapper>
            ): ''}
        </StyledGalleryWrapper>
    )
}

const StyledGalleryWrapper = styled.div`
    display: flex;
    padding: 150px 0 0;
    background-color: yellow;
    &::after {
        content: '';
        width: 100vw;
        height: 2px;
        position: absolute;
        top: 150px;
        left: 0;
        background-color: black;
    }
`

const StyledBackToTopLink = styled(Link)`
    position: absolute;
    top: 20px;
    left: 20px;
`

const StyledArtworkList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 30px 30px 0 0;
    width: 30%;
    text-align: right;
    position: relative;
    &::after {
        content: '';
        width: 2px;
        height: 100vh;
        position: absolute;
        top: -150px;
        right: 0;
        background-color: black;
    }
`

const StyledArtworkItem = styled.li`
    padding-bottom: 20px;
    
`

const StyledArtworkWrapper = styled.div`
    display: flex;
    width: 400px;
    height: calc(100vh - 150px);
    overflow: scroll;
`

const StyledArtworkDisplay = styled.img<{ref: React.RefObject<HTMLImageElement>}>`
    width: calc(400px - 32px);
    position: relative;
    left: 10px;
    object-fit: contain;
    object-position: left top;
`

const StyledArtworkLargerButton = styled.span`
    position: relative;
    left: 10px;
    width: 22px;
    height: 22px;
    &::before {
        content: '';
        width: 2px;
        height: 22px;
        position: absolute;
        top: 0;
        left: 10px;
        background-color: black;
    }
    &::after {
        content: '';
        height: 2px;
        width: 22px;
        position: absolute;
        top: 10px;
        left: 0;
        background-color: black;
    }
`

const StyledModalWrapper = styled.div`
    z-index: 100;
`

const StyledModalBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    width: 100vw;
    height: 100vh;
`

const StyledLargeArtworkWrapper = styled.div`
    width: 80vw;
    height: calc(100vh - 75px);
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    overflow: scroll;
`

const StyledLargeArtwork = styled.img`
    width: 100%;
    object-fit: contain;
    object-position: top;
`

const StyledArtworkSmallerButton = styled.span`
    position: absolute;
    right: calc(10% - 2px);
    bottom: 30px;
    &::before {
        content: '';
        width: 22px;
        height: 2px;
        position: absolute;
        top: 0;
        left: 10px;
        background-color: white;
    }
`