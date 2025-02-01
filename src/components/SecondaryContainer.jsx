import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movieList = useSelector((store) => store.movies.nowPlayingMovies);

    return (
        <div className="bg-black absolute w-screen">
            <div className="-mt-38">
                <MovieList title={"Now Playing"} movieList={movieList} />
                <MovieList title={"Now Playing"} movieList={movieList} />

                <MovieList title={"Now Playing"} movieList={movieList} />

                <MovieList title={"Now Playing"} movieList={movieList} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
