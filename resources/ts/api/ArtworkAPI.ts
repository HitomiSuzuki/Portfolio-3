import axios from 'axios';

type Artwork = {
    title: string
    imgURL: string
}

// 作品取得処理
const getArtwork = async () => {
    const {data} = await axios.get('api/artwork');
    return data
}

// 作品投稿処理
// const postArtwork = async({title, imgURL}: {title: string, imgURL: File | undefined}) => {
//     const {data} = await axios.post<Artwork>(
//         `/api/artwork`, {title, imgURL}
//     )
//     console.log("data" + data)
//     console.log("title" + title)
//     console.log("imgURL" + imgURL)
//     return data
// }
const postArtwork = async(imgURL: FormData | undefined) => {
    // const {data} = await axios.post<FormData | undefined>(
    //     `/api/artwork`, {imgURL}
    // )
    // console.log("data" + data)
    console.log("imgURL" + imgURL)
    return 
}

export {
    postArtwork,
    getArtwork
}

