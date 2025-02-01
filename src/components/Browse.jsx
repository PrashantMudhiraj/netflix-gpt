import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer";
// import SecondaryContainer from "./SecondaryContainer";
import { Outlet } from "react-router";

const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <Outlet />
            {/* <MainContainer />
            <SecondaryContainer /> */}
        </div>
    );
};

export default Browse;
