import { createBrowserRouter, RouterProvider } from "react-router";

import Body from "./components/Body";
import Browse from "./components/Browse";
import Error from "./components/Error";
import GPTSearch from "./components/GptSearch";
import MainContainer from "./components/MainContainer";
import SecondaryContainer from "./components/SecondaryContainer";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/in",
            element: <Browse />,
            children: [
                {
                    path: "/in/browse",
                    element: (
                        <>
                            <MainContainer />
                            <SecondaryContainer />
                        </>
                    ),
                },
                {
                    path: "/in/gptSearch",
                    element: <GPTSearch />,
                },
            ],
        },
        {
            path: "/error",
            element: <Error />,
        },

        {
            path: "*",
            element: <Error />,
        },
    ]);
    return <RouterProvider router={appRouter} />;
};

export default App;
