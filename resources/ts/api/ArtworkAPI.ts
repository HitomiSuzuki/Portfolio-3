import axios from 'axios';
import { toast } from 'react-toastify';

type Artwork = {
    id: number,
    title: string,
    imgURL: string,
    updated_at: Date,
    created_at: Date
}

// 作品取得処理
const getArtwork = async () => {
    const {data} = await axios.get('api/artwork');
    return data
}

// 作品投稿処理
const postArtwork = async(imgInfo: FormData) => {
    await axios.post('/api/artwork', imgInfo, {
        headers: {
            'content-type': 'multipart/form-data',
        }
    })
    .then(response => {
        console.log(response)
        toast.success('登録に成功しました');
    })
    .catch((err) => {
        console.log(err)
        toast.error('登録に失敗しました');
    })
}

const deleteArtwork = async(id: number) => {
    const data = await axios.delete(`api/artwork/${id}`)
    .then(response => {
        console.log(response)
        toast.success('削除に成功しました')
        return response.data
    })
    .catch((err) => {
        console.log(err)
        toast.error('登録に失敗しました')
        return
    })

    return data
}

export {
    postArtwork,
    getArtwork,
    deleteArtwork
}

