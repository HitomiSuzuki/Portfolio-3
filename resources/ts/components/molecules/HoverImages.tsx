import React, {useRef, createRef, RefObject} from "react";
import styled from "styled-components";
import img1 from '../../static/img1.jpg';

type HoverImageProps = {
    images: string[];
}

export const HoverImages = (props: HoverImageProps) => {
    const{images} = props;

    
  const targetOverlays: RefObject<HTMLDivElement>[] = []
  
  images.forEach((_, index) => {
    targetOverlays[index] = createRef<HTMLDivElement>()
  })


    const toggleOverlay = (i: number) => {
        targetOverlays[i].current?.classList.contains('show') ? targetOverlays[i].current?.classList.remove('show') :targetOverlays[i].current?.classList.add('show');
    }

    return (
        <StyledHoverImageList>
            {images.map((img, i) => {
                return (
                    <StyledHoverImageItem  onMouseEnter={() => toggleOverlay(i)} onMouseLeave={() => toggleOverlay(i)}>
                        <StyledHoverImage src={img}/>
                        <StyledHoverImageOverlay ref={targetOverlays[i]}>
                            <StyledDeleteButton type="button" onClick={() => console.log('YO')}>Delete</StyledDeleteButton>
                        </StyledHoverImageOverlay>
                    </StyledHoverImageItem>
                )
            })}
        </StyledHoverImageList>
    )
}

const StyledHoverImageList = styled.ul`
    list-style: none;
    margin: 200px 110px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const StyledHoverImageItem = styled.li`
    position: relative;
    width: 22%;
    height: calc((100vw - 220px) / 100 * 22);
    overflow: hidden;
    margin: 20px 1.5% ;
`

const StyledHoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`

const StyledHoverImageOverlay = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    transition: all 0.1s ease-in-out;
    background: green;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &.show {
        top: 0;
    }
`

const StyledDeleteButton = styled.button`
    display: block;
    margin: 0 auto;
`