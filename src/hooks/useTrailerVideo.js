import { useEffect } from "react";
import appConstants from "../utils/appConstants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useTrailerVideo = (movie_id) => {
    const dispatch = useDispatch();

    const getTrailerVideo = async () => {
        const data = await fetch(
            appConstants.imdb_trailer_api(movie_id),
            appConstants.options
        );

        const movie_trailer = await data.json();

        let main_movie = movie_trailer.results?.filter(
            (movie) => movie.type === "Trailer"
        );
        main_movie = main_movie.length
            ? main_movie[0]
            : movie_trailer.results[0];

        dispatch(addMovieTrailer(main_movie));
    };

    useEffect(() => {
        getTrailerVideo();
    }, []);
};

export default useTrailerVideo;
