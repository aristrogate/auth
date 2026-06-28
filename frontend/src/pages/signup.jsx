import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {

    const [SignupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...SignupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const { name, email, password } = SignupInfo;

        if (!name || !email || !password) {
            return handleError('Please fill out all of the fields!')
        }
    }

    return (
        <div className='container'>
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Username</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder="Enter your username..."
                        value={SignupInfo.name}
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder="Enter your email..."
                        value={SignupInfo.email}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder="Enter your password..."
                        value={SignupInfo.password}
                    />
                </div>
                <button>Sign Up</button>

                <span>Already have an account?
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup