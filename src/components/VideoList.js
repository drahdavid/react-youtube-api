import VideoItem from "./VideoItem";


const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(el => {
        return <VideoItem key={el.id.videoId} onVideoSelect={onVideoSelect} video={el}></VideoItem>
    });


    return (
        <div className={"ui relaxed divided list"}>{renderedList}</div>
    )
}
export default VideoList;