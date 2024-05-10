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
import { useDispatch } from "react-redux";
import { addUrl } from "../../features/ImageSlice";


export const Artworks = () => {

    
    
    const [images, setImages] = useState<Artwork[]>([])
    const [currentImage, setCurrentImage] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()});
    const [showModal, setShowModal] = useState(false);
    const [deletedData, setDeletedData] = useState<Artwork>({title: "", imgURL: "", id: 0, created_at: new Date(), updated_at: new Date()});
    const [urls, setUrls] = useState([''])

    const titleList = useSelector(state => state.titles);
    const storage = getStorage();
    const imageList = useSelector(state => state.images);
    const dispatch = useDispatch();


    useEffect( () => {
        // TODO:なんか2回読み込まれてるので直す
        titleList.forEach((item, i) => {
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
                dispatch(addUrl(
                    {
                        id: imageList.length,
                        url: url
                    }
                ))
            })
            .catch((error) => {
                // Handle any errors
                console.log('err');
            });
        })
    },[])

    return (
        <>
        <AdminHeader/>
        {/* 
        <HoverImages images={images} setCurrentImage={setCurrentImage} setShowModal={setShowModal} />
        {showModal ? <DeleteModal currentImage={currentImage} setShowModal={setShowModal} setDeletedData={setDeletedData} /> : ""} */}
        {imageList.map(item => {
            console.log(imageList)
            return(
                <img src={item.url} />
            )
        })}
        
        </>
    )
}

const StyledButton = styled.button`
width: 100px;
height: 30px;
margin-top: 500px;
`