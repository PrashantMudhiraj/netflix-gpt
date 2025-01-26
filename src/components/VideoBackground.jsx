import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
    const movieData = useSelector((store) => store.movies.trailerVideo);
    useTrailerVideo(movie_id);

    return (
        <div>
            <iframe
                src={"https://www.youtube.com/embed/" + movieData?.key}
                title="YouTube video player"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
