import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        idmbMoviesList: null,
        MovieNames: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addGptMovies: (state, action) => {
            const { moviesNames, idmbMoviesList } = action.payload;
            state.MovieNames = moviesNames;
            state.idmbMoviesList = idmbMoviesList;
        },
    },
});

export const { addNowPlayingMovies, addMovieTrailer, addGptMovies } =
    movieSlice.actions;
export default movieSlice.reducer;
