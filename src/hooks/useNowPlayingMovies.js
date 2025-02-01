import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import appConstants from "../utils/appConstants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
    );
    const dispatch = useDispatch();
    const getMovieNowPlaying = async () => {
        const data = await fetch(appConstants.imdb_api, appConstants.options);
        const movieList = await data.json();
        dispatch(addNowPlayingMovies(movieList.results));
    };

    useEffect(() => {
        !nowPlayingMovies && getMovieNowPlaying();
    }, []);
};

export default useNowPlayingMovies;
