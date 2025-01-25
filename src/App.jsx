import { createBrowserRouter, RouterProvider } from "react-router";

import Body from "./components/Body";
import Browse from "./components/Browse";

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
    ]);
    return <RouterProvider router={appRouter} />;
};

export default App;
