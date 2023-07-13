import * as api from '../api/ArtworkAPI';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

const usePostArtwork = () => {
    const queryClient = useQueryClient();

    return useMutation(api.postArtwork, {
        onSuccess: () => {
            queryClient.invalidateQueries('artwork');
            toast.success('登録に成功しました');
        },
        onError: () => {
            toast.error('登録に失敗しました。')
        }
    })
}

export {
    usePostArtwork
}

