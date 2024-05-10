import React, {useEffect, useState} from "react";
import {  HoverImages } from "../../components/molecules/HoverImages";
import { DeleteModal } from "../../components/molecules/Deletemodal";
import { useGetArtwork } from "../../queries/ArtworkQuery";
import { Artwork } from "../../type/type";
import { AdminHeader } from "../../components/atoms/AdminHeader";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

import styled from "styled-components";
import { useSelector } from "../..";


export const Artworks = () => {
    
    const [images, setImages] = useState<Artwork[]>([])
    const [currentImage, setCurrentImage] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()});
    const [showModal, setShowModal] = useState(false);
    const [deletedData, setDeletedData] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()});

    const titleList = useSelector(state => state);
    const storage = getStorage();

    const urls: string[] = [];

    // // const data = useGetArtwork()
    // const storage = getStorage();
    // const pathReference = ref(storage, 'images/全能.jpg');

    const handleDownload = async () => {
        console.log(titleList.titles)
    }


    useEffect( () => {
        titleList.titles.forEach((item, i) => {
            console.log(i);
            getDownloadURL(ref(storage, `images/${item.title}`))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'
            
                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                console.log("url" + url);
                urls.push(url);
                console.log(urls);
            })
            .catch((error) => {
                // Handle any errors
                console.log('err');
            });
        })
        setImages(images.filter((item) => item.id != deletedData.id))
    },[])

    return (
        <>
        <AdminHeader/>
        {/* 
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