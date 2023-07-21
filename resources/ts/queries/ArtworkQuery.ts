import * as api from '../api/ArtworkAPI';
import { useQuery } from 'react-query';


const useGetArtwork = () => {
    const data = useQuery('artwork', () => api.getArtwork());
    return data
}

export {
    useGetArtwork
}

