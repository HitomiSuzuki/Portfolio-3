import React, {useRef} from "react";
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
    const clickArtworkName = (imgURL: string) => {
        if(!artworkDisplay.current) {
            return
        }
        artworkDisplay.current.src = imgURL;
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
            </StyledArtworkWrapper>
        </StyledGalleryWrapper>
    )
}

const StyledGalleryWrapper = styled.div`
    display: flex;
    margin: 150px 0 0;
    border-top: 1px solid black;
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
    width: 300px;
    text-align: right;
    position: relative;
    &::after {
        content: '';
        width: 1px;
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
    width: 400px;
    height: calc(100vh - 150px);
    overflow: scroll;
`

const StyledArtworkDisplay = styled.img<{ref: React.RefObject<HTMLImageElement>}>`
    width: 100%;
`
