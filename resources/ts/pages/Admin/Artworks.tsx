import React, {useState} from "react";
import {  HoverImages } from "../../components/molecules/HoverImages";
import img1 from '../../static/img1.jpg';
import img2 from '../../static/img2.jpg';
import img3 from '../../static/img3.jpg';
import img4 from '../../static/img4.jpg';
import img5 from '../../static/img5.jpg';
import img6 from '../../static/img6.jpg';
import img7 from '../../static/img7.jpg';
import img8 from '../../static/img8.jpg';
import { DeleteModal } from "../../components/atoms/Deletemodal";

export const Artworks = () => {
    // 画像取得処理に後ほど書き換える
    const images = [
        {title: 'test1', src: img1, id: 1},
        {title: 'test2', src: img2, id: 2},
        {title: 'test3', src: img3, id: 3},
        {title: 'test4', src: img4, id: 4},
        {title: 'test5', src: img5, id: 5},
        {title: 'test6', src: img6, id: 6},
        {title: 'test7', src: img7, id: 7},
        {title: 'test8', src: img8, id: 8},
        ];

    const [currentImage, setCurrentImage] = useState({title: "", src: "", id: 0});
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <HoverImages images={images} setCurrentImage={setCurrentImage} setShowModal={setShowModal} />
        {showModal ? <DeleteModal currentImage={currentImage} setShowModal={setShowModal} /> : ""}
        
        </>
    )
}