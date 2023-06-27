import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import { gsap, ScrollTrigger } from "gsap/all";

/**
 * @param {BioTextProps} props - プロパティ
 * @property {string} children - テキストとなる小要素
 * @property {number} key - ユニークなキー
 */
type BioTextProps = {
    children: string;
    key: number;
}

export const BioText = (props: BioTextProps) => {
    const {children, key} = props;

    const bioText = {
        [key]: useRef<HTMLParagraphElement>(null)
    }
    

    useEffect(() => {
        const bioTextContent = bioText[key].current

        if(!bioTextContent) {
            return
        }

        const spanWrapText = () => {
            
    
            const splitText = bioTextContent.textContent?.split('');
            if(splitText === undefined) {
                return
            }
            let returnText = '';
            for(const char of splitText) {
                returnText = returnText + `<span>${char}</span>`;
            }
            // return returnText;
            bioTextContent.innerHTML=returnText;
        }
    
    
        spanWrapText();
        gsap.registerPlugin(ScrollTrigger)
    
        const bioTextContentSpans = Array.from(bioTextContent.querySelectorAll('span'));
        if(bioTextContentSpans) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bioTextContentSpans,
                    start: 'top 60%'
                }
            })
        
            tl.from(bioTextContentSpans, {
                opacity: 0,
                duration: 0.01,
                stagger: 0.03
            })
        }
    },[])
    

    


    return (
        <div>
        <StyledBioText ref={bioText[key]}>{children}</StyledBioText>
        </div>
    )
}

const StyledBioText = styled.p`
    background: black;
    color: white;
    margin-top: 10px;
    display: inline-block;
    padding: 0 60px 0 30px;
`