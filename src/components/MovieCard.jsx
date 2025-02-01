import React from "react";
import appConstants from "../utils/appConstants";

const MovieCard = ({ movies }) => {
    const { poster_path } = movies;
    if (!poster_path) return null;
    return (
        <div className="w-40 pr-4 ">
            <img
                src={appConstants.imdb_image + poster_path}
                alt="movie image"
            />
        </div>
    );
};

export default MovieCard;
