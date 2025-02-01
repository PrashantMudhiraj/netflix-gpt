import appConstants from "../utils/appConstants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GPTSearch = () => {
    return (
        <div>
            <div className=" absolute -z-10">
                <img src={appConstants.netflix_bg} alt="bg" />
            </div>

            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
};

export default GPTSearch;
