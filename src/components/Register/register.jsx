import React, { useState } from "react";
import { userRegister } from "../../Services/UserService/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
    });

    const handleValidation = (ev) => {
        const { name, value } = ev.target;
        setUser({ ...user, [name]: value });

        let newErrors = { ...errors };

        if (name === "email") {
            newErrors.emailError =
                value.length === 0 ? "Email is required" :
                    value.includes("@") ? "" : "Invalid email format";
        }

        if (name === "username") {
            newErrors.usernameError =
                value.length === 0 ? "Username is required" :
                    /\s/.test(value) ? "Username must not contain spaces" : "";
        }

        if (name === "password") {
            newErrors.passwordError =
                value.length < 8
                    ? "Password must be at least 8 characters"
                    : !/[a-z]/.test(value)
                        ? "Must contain at least one lowercase letter"
                        : !/[A-Z]/.test(value)
                            ? "Must contain at least one uppercase letter"
                            : !/\d/.test(value)
                                ? "Must contain at least one digit"
                                : !/[@%$#*]/.test(value)
                                    ? "Must contain at least one special character (@%$#*)"
                                    : "";
        }

        if (name === "confirmPassword") {
            newErrors.confirmPasswordError =
                value !== user.password ? "Passwords must match" : "";
        }

        setErrors(newErrors);
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const newErrors = {
            usernameError: user.username.length === 0 ? "Username is required" : errors.usernameError,
            emailError: user.email.length === 0 ? "Email is required" : errors.emailError,
            passwordError: user.password.length === 0 ? "Password is required" : errors.passwordError,
            confirmPasswordError: user.confirmPassword.length === 0 ? "Confirm Password is required" : errors.confirmPasswordError,
        };
        setErrors(newErrors);

        if (
            !newErrors.usernameError &&
            !newErrors.emailError &&
            !newErrors.passwordError &&
            !newErrors.confirmPasswordError
        ) {
            try {
                await userRegister(user.email, user.password);
                console.log(user);
                toast.success("Registration Successful!");
                navigate("/login");
            } catch (error) {
                console.error(error);
                toast.error("Registration Failed!");
            }
        } else {
            toast.error("Invaild validation!");
        }
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
            <h1 className="text-center">Register Form</h1>
                <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="username"
                        value={user.username}
                        className="form-control"
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{errors.usernameError}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={user.email}
                        className="form-control"
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{errors.emailError}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={user.password}
                        className="form-control"
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{errors.passwordError}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        className="form-control"
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{errors.confirmPasswordError}</p>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>
                <Toaster position="top-center" />
            </form>
        </div>
        </>
    );
}


