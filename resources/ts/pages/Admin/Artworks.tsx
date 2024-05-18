import React, {useEffect, useState} from "react";
import {  HoverImages } from "../../components/molecules/HoverImages";
import { DeleteModal } from "../../components/molecules/Deletemodal";
import { Artwork } from "../../type/type";
import { AdminHeader } from "../../components/atoms/AdminHeader";
import styled from "styled-components";
import { useSelector } from "../../store/store";


export const Artworks = () => {
    const [currentImage, setCurrentImage] = useState<Artwork>({title: "", url: "", id: 0, created_at: new Date()});
    const [showModal, setShowModal] = useState(false);
    const [deletedData, setDeletedData] = useState<Artwork>({title: "", url: "", id: 0, created_at: new Date()});

    const imageList = useSelector(state => state.images);

    return (
        <>
        <AdminHeader/>
        <HoverImages images={imageList} setCurrentImage={setCurrentImage} setShowModal={setShowModal} />
        {showModal ? <DeleteModal currentImage={currentImage} setShowModal={setShowModal} setDeletedData={setDeletedData} /> : ""}
        <ArtworkImageList>
            {imageList.map(item => {
                return(
                    <ArtworkImageItem>
                        <ArtworkImage src={item.url}/>
                    </ArtworkImageItem>
                )
            })}
        </ArtworkImageList>
        </>
    )
}

const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 500px;
`

const ArtworkImageList = styled.ul`
    padding: 0;
    margin: 100px auto 0;
    max-width: 1200px;
    width: 90%;
    display: flex;
    list-style: none;
    justify-content: space-between;
`

const ArtworkImageItem = styled.li`
    width: 30%;
    aspect-ratio: 1/1;
`

const ArtworkImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`