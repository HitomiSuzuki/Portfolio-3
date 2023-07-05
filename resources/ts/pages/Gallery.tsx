import React, {useRef, useState, useEffect, createRef, RefObject} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import img1 from '../static/img1.jpg';
import img2 from '../static/img2.jpg';
import img3 from '../static/img3.jpg';
import img4 from '../static/img4.jpg';
import img5 from '../static/img5.jpg';
import img6 from '../static/img6.jpg';
import img7 from '../static/img7.jpg';
import img8 from '../static/img8.jpg';

interface State {
    imgURL: string;
}

export const Gallery = () => {
    //トップページから画像クリックで来た場合に、クリックされた画像要素を把握
    const location = useLocation();
    let initialImgURL = '';

     // ページを開いた時に画像をセットする
     useEffect(() => {
        if(location.state !== null) {
            initialImgURL = location.state.imgURL;
        }
    
        console.log(initialImgURL)
        if(!artworkDisplay.current) {
            return
        }
        if(initialImgURL !== "") {
            artworkDisplay.current.src = initialImgURL;
        }
        
    }, [])
    

    // 画像を表示する要素
    const artworkDisplay = useRef<HTMLImageElement>(null);

    // 現在表示されている画像
    let [artworkUrl, setArtworkUrl] = useState<string>(initialImgURL);

    // モーダルが開いているか
    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   
    // アートワークタイトルがクリックされた時
    const clickArtworkName = (currentImgURL: string) => {
        if(!artworkDisplay.current) {
            return
        }
        artworkDisplay.current.src = currentImgURL;
        setArtworkUrl(currentImgURL);
    }

    // モーダル開閉
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const artworkList = [
        {title: 'img1', URL: img1},
        {title: 'img2', URL: img2},
        {title: 'img3', URL: img3},
        {title: 'img4', URL: img4},
        {title: 'img5', URL: img5},
        {title: 'img6', URL: img6},
        {title: 'img7', URL: img7},
        {title: 'img8', URL: img8},
    ]
    

    return (
        <StyledGalleryWrapper>
            <StyledBackToTopLink to='/'>back to top</StyledBackToTopLink>
            <StyledArtworkList>
                {artworkList.map((item, index) => {
                    return (
                            <StyledArtworkItem onClick={() => clickArtworkName(item.URL)}>{index}</StyledArtworkItem>
                    )
                })}
                
            </StyledArtworkList>

            <StyledArtworkWrapper>
                {isMobile ? 
                    <>
                    <StyledArtworkDisplay src='' ref={artworkDisplay}></StyledArtworkDisplay>
                    {artworkUrl !== '' ? <StyledArtworkLargerButton onClick={() => toggleModal()}/>: ''}
                    </>
                : 
                    <StyledArtworks>
                        {artworkList.map((item) => {
                        return (
                            <StyledArtwork title={item.title}><img src={item.URL} /></StyledArtwork>
                        )
                    })}
                        
                    </StyledArtworks>
                }
                
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
    text-decoration: none;
    color: black;
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
    height: calc(100vh - 20px);
    position: absolute;
    top: 20px;
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

const StyledArtworks = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
`

const StyledArtwork = styled.li`
    height: 300px;
    width: auto;

    img {
        height: 100%;
        object-fit: contain;
        object-position: top;
    }

`
