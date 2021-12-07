import { useState } from "react";

const SignUpForm = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        email: "",
        password: "",
        terms: false,
    });

    const handleSubmit = (event) => {
        console.log(userData);
        event.preventDefault();
    };

    const handleChange = (event) => {
        if (event.target.name === "firstName")
            setUserData({ ...userData, firstName: event.target.value });
        if (event.target.name === "email")
            setUserData({ ...userData, email: event.target.value });
        if (event.target.name === "password")
            setUserData({ ...userData, password: event.target.value });
        if (event.target.name === "terms")
            setUserData({ ...userData, terms: !userData.terms });
    };

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
            <div>
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={userData.terms}
                    onChange={handleChange}
                />
                <label htmlFor="terms">I accept Terms and Conditons</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
