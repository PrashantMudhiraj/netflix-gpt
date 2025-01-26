import { createBrowserRouter, RouterProvider } from "react-router";

import Body from "./components/Body";
import Browse from "./components/Browse";
import Error from "./components/Error";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "browse",
            element: <Browse />,
        },
        {
            path: "error",
            element: <Error />,
        },
    ]);
    return <RouterProvider router={appRouter} />;
};

export default App;
