import React, {useEffect, useState} from "react";
import {  HoverImages } from "../../components/molecules/HoverImages";
import { DeleteModal } from "../../components/molecules/Deletemodal";
import { useGetArtwork } from "../../queries/ArtworkQuery";
import { Artwork } from "../../type/type";
import { AdminHeader } from "../../components/atoms/AdminHeader";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

import styled from "styled-components";


export const Artworks = () => {
    
    const [images, setImages] = useState<Artwork[]>([])
    const [currentImage, setCurrentImage] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()});
    const [showModal, setShowModal] = useState(false);
    const [deletedData, setDeletedData] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()})

    // // const data = useGetArtwork()
    // const storage = getStorage();
    // const pathReference = ref(storage, 'images/全能.jpg');

    const handleDownload = async () => {
        const fileName = 'images/upload';
        const fileRef = ref(storage, fileName);
        const url = await getDownloadURL(fileRef);
        console.log(url);
    }


    // useEffect(() => {
    //     if(!data) return
    //     setImages(data)
    // },[data])

    useEffect(() => {
        setImages(images.filter((item) => item.id != deletedData.id))
    },[deletedData])

    return (
        <>
        {/* <AdminHeader/>
        <HoverImages images={images} setCurrentImage={setCurrentImage} setShowModal={setShowModal} />
        {showModal ? <DeleteModal currentImage={currentImage} setShowModal={setShowModal} setDeletedData={setDeletedData} /> : ""} */}
        <StyledButton onClick={() => handleDownload()}>button</StyledButton>
        </>
    )
}

const StyledButton = styled.button`
width: 100px;
height: 30px;
margin-top: 500px;
`