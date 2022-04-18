import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import Toast from '../Toast/Toast';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    // get the email,password and submit
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    // forgot password
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                return <Toast></Toast>
            })
    }

    return (
        <div>
            <h2 className='mt-4 text-center'>Login</h2>
            <form onSubmit={handleUserSignIn} className='w-25 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div style={{ color: 'red' }}>{error?.message}</div>
                <div className='text-center d-grid'>
                    <button type="submit" className="btn btn-outline-dark">Login</button>
                </div>
                <div className='text-center'>
                    <button onClick={resetPassword} className='btn btn-link'>Forgot Password</button>
                </div>
            </form>
            <p className='text-center mt-2'>
                Don't have an account?  <Link to='/signup' className='form-link'>Create an account</Link>
            </p>
        </div>
    );
};

export default Login;