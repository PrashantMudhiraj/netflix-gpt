import React from "react";
import { useSelector } from "react-redux";
import appConstants from "../utils/appConstants";

const GptSearchBar = () => {
    const lang = useSelector((store) => store.languages.lang);
    return (
        <div className="pt-[15%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input
                    type="text"
                    className="p-4 m-4 col-span-8 bg-white "
                    placeholder={appConstants.languages[lang]?.placeholder}
                />
                <button className="col-span-4 bg-red-700 text-white m-4">
                    {appConstants.languages[lang]?.search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
