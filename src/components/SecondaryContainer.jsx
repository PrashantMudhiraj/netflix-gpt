import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    return (
        <div className="bg-black absolute w-screen">
            <div className="-mt-38">
                <MovieList title={"Now Playing"} />
                <MovieList title={"Now Playing"} />

                <MovieList title={"Now Playing"} />

                <MovieList title={"Now Playing"} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
