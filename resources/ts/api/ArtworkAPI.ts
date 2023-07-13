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
const postArtwork = async({title, imgURL}: {title: string, imgURL: string}) => {
    const {data} = await axios.post<Artwork>(
        `/api/artwork`, {title, imgURL}
    )
    return data
}

export {
    postArtwork,
    getArtwork
}

