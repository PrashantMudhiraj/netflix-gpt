import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import appConstants from "../utils/appConstants.js";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribeFn = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => {
            unsubscribeFn();
        };
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Singed Out");
            })
            .catch((error) => {
                console.log(error.message);
                navigate("/error");
            });
    };

    return (
        <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-10 flex justify-between">
            <img
                src={appConstants.netflix_logo}
                className="w-44 my-1 mx-5"
                alt="logo"
            />
            {user && (
                <div className="flex px-2 pt-4 ">
                    <img
                        src={appConstants.user_avtar}
                        className="w-10 h-10 mx-4 rounded-full"
                    />
                    <button
                        className=" h-10 cursor-pointer hover:bg-gray-400 bg-gray-100/70 px-3 rounded-2xl"
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
