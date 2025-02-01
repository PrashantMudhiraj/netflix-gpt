import { useDispatch, useSelector } from "react-redux";
import appConstants from "../utils/appConstants";
import openaiGpt from "../utils/openAI";
import { addGptMovies } from "../utils/movieSlice";

const GptSearchBar = () => {
    const lang = useSelector((store) => store.languages.lang);
    const dispatch = useDispatch();

    const searchMovie = async (movie) => {
        const data = await fetch(
            appConstants.imdb_movie_api(movie),
            appConstants.options
        );
        return await data.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.elements.gptInput.value);
        const search = e.target.elements.gptInput.value;

        const gptQuery =
            "Act as a Movie recommendation system and suggest some movies for the query " +
            search +
            ". only give me names of top 5 movies in Hindi, comma separated like the example result give ahead. Example result: Sholay, Don, Gadar, Kalki, Salaar";

        const results = (await openaiGpt(gptQuery)).split(", ");
        // console.log(results);
        const response = results.map((movie) => searchMovie(movie));
        const moviesList = await Promise.all(response);
        console.log(moviesList);
        dispatch(
            addGptMovies({ moviesNames: results, idmbMoviesList: moviesList })
        );
    };

    return (
        <div className="pt-[15%] flex justify-center">
            <form
                className="w-1/2 bg-black grid grid-cols-12"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="p-4 m-4 col-span-8 bg-white "
                    placeholder={appConstants.languages[lang]?.placeholder}
                    name="gptInput"
                />
                <button className="col-span-4 bg-red-700 text-white m-4">
                    {appConstants.languages[lang]?.search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
