import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
                navigate("/error");
            });
    };

    return (
        <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-10 flex justify-between">
            <img
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                className="w-44 my-1 mx-5"
                alt="logo"
            />
            {user && (
                <div className="flex px-2 pt-4 ">
                    <img
                        src="https://img.freepik.com/premium-photo/male-project-manager-animation-animated-cartoon-professional-business-man-isolated-colour-flat-line-2d-character-4k-video-footage_1029476-185937.jpg?w=360"
                        className="w-10 h-10 mx-2 rounded-full"
                    />
                    <button
                        className=" h-10 cursor-pointer pt-3 hover:text-gray-200"
                        onClick={handleSignOut}
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
