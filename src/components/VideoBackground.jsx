import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
    const movieData = useSelector((store) => store.movies.trailerVideo);
    useTrailerVideo(movie_id);

    return (
        <div className="w-screen h-screen">
            <iframe
                className="w-screen aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    movieData?.key +
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
