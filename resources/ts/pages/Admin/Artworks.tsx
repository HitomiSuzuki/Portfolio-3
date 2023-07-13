import React, {useEffect, useState} from "react";
import {  HoverImages } from "../../components/molecules/HoverImages";
import { DeleteModal } from "../../components/atoms/Deletemodal";
import { useGetArtwork } from "../../queries/ArtworkQuery";

type ArtworkFromDB = {
    id: number;
    title: string;
    imgURL: string;
    created_at: Date;
    updated_at: Date;
}

type Artwork = {
    id: number;
    title: string;
    imgURL: string;
}

export const Artworks = () => {
    
    const [images, setImages] = useState<Artwork[]>([])
    const [currentImage, setCurrentImage] = useState({title: "", src: "", id: 0});
    const [showModal, setShowModal] = useState(false);
    
    const {data} = useGetArtwork();
    useEffect(() => {
        if(!data) return;
        const fixedData = data?.map((data: ArtworkFromDB) => {return {id: data.id, title: data.title, imgURL: data.imgURL}})
        setImages(fixedData)
    }, [data])

    return (
        <>
        <HoverImages images={images} setCurrentImage={setCurrentImage} setShowModal={setShowModal} />
        {showModal ? <DeleteModal currentImage={currentImage} setShowModal={setShowModal} /> : ""}
        
        </>
    )
}