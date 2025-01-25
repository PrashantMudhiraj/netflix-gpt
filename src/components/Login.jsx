import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
                    alt=""
                />
            </div>
            <form className="w-3/12 absolute  p-10 bg-gray-950/80 my-30 mx-auto right-0 left-0 text-white rounded-sm">
                <h1 className="font-bold text-2xl py-4">
                    {isSignForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignForm && (
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700/80 rounded-lg"
                    />
                )}

                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700/80 rounded-lg"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="p-4 my-4 w-full bg-gray-700/80 rounded-lg"
                />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
                    {isSignForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignForm
                        ? "New to Netflix ? Sign Up Now"
                        : "Already Registered Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
