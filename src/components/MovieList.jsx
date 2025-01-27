import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title }) => {
    const movieList = useSelector((store) => store.movies.nowPlayingMovies);
    // console.log(movieList);
    return (
        <div className="p-6">
            <h2 className="text-white text-2xl pb-2">{title}</h2>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movieList?.map((movie) => (
                        <MovieCard key={movie.id} movies={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
