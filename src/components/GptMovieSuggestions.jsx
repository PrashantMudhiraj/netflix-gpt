import { useSelector } from "react-redux";
import MoviesList from "./MovieList";

const GptMovieSuggestions = () => {
    const { idmbMoviesList, MovieNames } = useSelector((store) => store.movies);

    if (!MovieNames) return null;
    return (
        <div className="bg-black/80">
            {idmbMoviesList.map((movie, index) => {
                return (
                    <MoviesList
                        key={MovieNames[index]}
                        title={MovieNames[index]}
                        movieList={movie.results}
                    />
                );
            })}
        </div>
    );
};

export default GptMovieSuggestions;
