import React, {useEffect, useState} from "react";
import {  HoverImages } from "../../components/molecules/HoverImages";
import { DeleteModal } from "../../components/molecules/Deletemodal";
import { useGetArtwork } from "../../queries/ArtworkQuery";
import { Artwork } from "../../type/type";
import { AdminHeader } from "../../components/atoms/AdminHeader";


export const Artworks = () => {
    
    const [images, setImages] = useState<Artwork[]>([])
    const [currentImage, setCurrentImage] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()});
    const [showModal, setShowModal] = useState(false);
    const [deletedData, setDeletedData] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()})

    const data = useGetArtwork()

    useEffect(() => {
        if(!data) return
        setImages(data)
    },[data])

    useEffect(() => {
        setImages(images.filter((item) => item.id != deletedData.id))
    },[deletedData])

    return (
        <>
        <AdminHeader/>
        <HoverImages images={images} setCurrentImage={setCurrentImage} setShowModal={setShowModal} />
        {showModal ? <DeleteModal currentImage={currentImage} setShowModal={setShowModal} setDeletedData={setDeletedData} /> : ""}
        
        </>
    )
}