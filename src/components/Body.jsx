import { useEffect } from "react";
import { useNavigate } from "react-router";

import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login.jsx";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                console.log(displayName);
                dispatch(addUser({ uid, email, displayName }));
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    return (
        <div>
            <Login />
        </div>
    );
};

export default Body;
