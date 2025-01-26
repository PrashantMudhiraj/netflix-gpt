export const validateFormData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
            password
        );

    if (!isEmailValid) {
        return "Email Address not Valid";
    }

    if (!isPasswordValid) {
        return "Password not Valid";
    }

    return null;
};
