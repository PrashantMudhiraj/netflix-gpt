const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" px-12 py-16 z-auto">
            <h1 className="text-3xl font-semibold py-3 px-5">{title}</h1>
            <p className="px-5 py-4 w-1/3">{overview}</p>
            <div className="px-5">
                <button className="bg-white/50  text-lg px-8 py-2">Play</button>
                <button className="bg-white/50 mx-4 text-lg px-8 py-2">
                    More info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
