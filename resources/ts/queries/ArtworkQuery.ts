import * as api from '../api/ArtworkAPI';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { toast } from 'react-toastify';

const usePostArtwork = () => {
    const queryClient = useQueryClient();

    return useMutation(api.postArtwork, {
        onSuccess: () => {
            queryClient.invalidateQueries('artwork');
            toast.success('登録に成功しました');
        },
        onError: () => {
            console.log('err');
            toast.error('登録に失敗しました。')
        }
    })
}

const useGetArtwork = () => {
    const data = useQuery('artwork', () => api.getArtwork());
    return data
}

export {
    usePostArtwork,
    useGetArtwork
}

