import openaiGpt from "../utils/openAI";

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.gptInput.value);
    const search = e.target.elements.gptInput.value;

    const gptQuery =
        "Act as a Movie recommendation system and suggest some movies for the query " +
        search +
        ". only give me names of top 5 movies , comma separated like the example result give ahead. Example result: Sholay, Don, Gadar, Kalki, Salaar";

    const results = await openaiGpt(gptQuery);
    console.log(results);
};
