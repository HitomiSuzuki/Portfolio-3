import axios from 'axios';
import { toast } from 'react-toastify';

// 作品取得処理
const getArtwork = async () => {
    const {data} = await axios.get('api/artwork');
    return data
}

// 作品投稿処理
const postArtwork = async(imgInfo: FormData) => {
    console.log('HEY')
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

export {
    postArtwork,
    getArtwork
}

