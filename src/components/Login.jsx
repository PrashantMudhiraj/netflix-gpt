import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import appConstants from "../utils/appConstants";

const Login = () => {
    const [isSignForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = validateFormData(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        if (message) return;
        if (!isSignForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: null,
                    })
                        .then(() => {
                            const { uid, email, displayName } =
                                auth.currentUser;
                            dispatch(addUser({ uid, email, displayName }));
                            console.log("profile Updated");
                        })
                        .catch((error) => {
                            console.log(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={appConstants.netflix_bg} alt="" />
            </div>
            <form className="w-4/14 absolute  p-10 bg-gray-950/85 my-30 mx-auto right-0 left-0 text-white rounded-sm">
                <h1 className="font-bold text-2xl py-4">
                    {isSignForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignForm && (
                    <input
                        ref={name}
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700/80 rounded-lg"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700/80 rounded-lg"
                />
                <input
                    ref={password}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="p-4 my-4 w-full bg-gray-700/80 rounded-lg"
                />
                {errorMessage && (
                    <p className="font-bold text-red-400">{errorMessage}</p>
                )}
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleSubmit}
                >
                    {isSignForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignForm
                        ? "New to Netflix ? Sign Up Now"
                        : "Already Registered ? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
