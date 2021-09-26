import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import axios from 'axios';

import signInImage from '../../assets/signin.jpg';
const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}
const Auth = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form)
    }

    const switchMode = () => {
        setIsSignup((prevState) => !prevState);
    }

    return (
        <div className="auth-form-container">
            <div className="form-fields">
                <div className="content">
                    <p>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth-input">
                                <label htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth-input">
                            <label htmlFor="username">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className="auth-input">
                                <label htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth-input">
                                <label htmlFor="avatarURL">
                                    Avatar URL
                                </label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth-input">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isSignup && (
                            <div className="auth-input">
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>)}

                        <div className="form-button">
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className="account">
                        <p>
                            {isSignup ? 'Already have an account?' : "Don't have an account?"}
                        </p>
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign In' : 'Sign Up'}
                        </span>
                    </div>
                </div>
            </div>
            <div className="form-image">
                <img src={signInImage} alt="Sign in" />
            </div>
        </div>
    )
}

export default Auth
