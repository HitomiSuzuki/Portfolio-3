import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type TitleInputProps = {
    img: {title: string, src: string, id: number};
}

export const TitleInput = (props: TitleInputProps) => {
    const{img} = props;
    const [editable, setEditable] = useState(false);
    const [title, setTitle] = useState(img.title);

    // 親要素の中で配列になるので数字を渡しておく
    const input = {
        [img.id]: useRef<HTMLInputElement>(null)
    }

    // 文字編集状態にする
    const editText = () => {
        setEditable(true)
    }

    // フォーカスアウトで文字を保存する
    const saveText = () => {
        setEditable(false)
        //文字列を保存するメソッドを書く
    }

    // setStateが遅れて起こるので、それに合わせてインプットにカーソルを当てる
    useEffect(() => {
        input[img.id].current?.focus()
    }, [editable])

    return ( 
        <>
            {editable ? 
                <StyledTitleInput 
                    ref={input[img.id]} 
                    onBlur={() => saveText()} 
                    onChange={(e) => setTitle(e.target.value)}
                /> 
                :
                <StyledTitleText onClick={() => editText()}>
                    {title}
                </StyledTitleText>}
        </>
    )
}

const StyledTitleInput = styled.input`
    margin: 5px 0;
    font-size: 12px;
    height: 16px;
    width: 93%;
`

const StyledTitleText = styled.p`
    margin: 5px 0;
    font-size: 12px;
    height: 18px;
    padding: 2px;
`