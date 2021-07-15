import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

const App = () => {

    const [videoData, setVideoData] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => { onSearchSubmit('Foo Fighters') }, [])

    const onSearchSubmit = async (query) => {
        const response = await youtube.get('/search', {
            params: {
                q: query
            }
        });
        setVideoData(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };


    return (
        <div className={"ui container"}>

            <SearchBar onFormSubmit={onSearchSubmit}></SearchBar>
            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <VideoDetail video={selectedVideo}></VideoDetail>
                    </div>
                    <div className={"five wide column"}>
                        <VideoList onVideoSelect={onVideoSelect} videos={videoData}></VideoList>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default App;