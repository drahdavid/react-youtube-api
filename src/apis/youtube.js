
//https://developers.google.com/youtube/v3/docs/search/list
import axios from 'axios';

const KEY = 'AIzaSyD3RJuv1GqTkflV6BOHot0KEY1ddLVBlB4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }

});
