// import OpenAI from "openai";
// import appConstants from "./appConstants";

// const client = new OpenAI({
//     apiKey: appConstants.open_ai_key,
//     dangerouslyAllowBrowser: true,
// });

// async function openaiGpt(input) {
//     const chatCompletion = await client.chat.completions.create({
//         messages: [{ role: "user", content: input }],
//         model: "gpt-3.5-turbo",
//     });

//     return chatCompletion.choices;
// }

import { GoogleGenerativeAI } from "@google/generative-ai";
import appConstants from "./appConstants";

async function openaiGpt(input) {
    const genAI = new GoogleGenerativeAI(appConstants.open_ai_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = input;

    const result = await model.generateContent(prompt);

    return result.response.text();
}

export default openaiGpt;
