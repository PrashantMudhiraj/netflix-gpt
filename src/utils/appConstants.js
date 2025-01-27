const appConstants = {
    netflix_bg:
        "https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg",
    user_avtar:
        "https://img.freepik.com/premium-photo/male-project-manager-animation-animated-cartoon-professional-business-man-isolated-colour-flat-line-2d-character-4k-video-footage_1029476-185937.jpg?w=360",
    netflix_logo:
        "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
    imdb_api:
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",

    imdb_trailer_api: (movie_id) =>
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
    options: {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
        },
    },
    imdb_image: "https://image.tmdb.org/t/p/w500/",
};

export default appConstants;
