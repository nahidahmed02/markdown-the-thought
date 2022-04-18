import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Signup.css'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorUpdate, setErrorUpdate] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const [signInWithGoogle, googleUser, error] = useSignInWithGoogle(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user || googleUser) {
        navigate('/')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrorUpdate('Sorry! Passwords did not match')
            return
        }
        if (password.length < 6) {
            setErrorUpdate('Please put a password of atleast 6 charecters')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className='text-danger text-center'>Error: {error?.message}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className='mt-4 text-center'>Sign Up</h2>
            <form onSubmit={handleCreateUser} className='w-25 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div style={{ color: 'red' }}>{errorUpdate}</div>
                <div className='text-center d-grid'>
                    <button type="submit" className="btn btn-outline-dark">Sign Up</button>
                </div>
            </form>
            <p className='text-center mt-2'>
                Already have an account?  <Link to='/login' className='form-link'>Login</Link>
            </p>
            <div className='lines'>
                <div className='line'></div>
                or
                <div className='line'></div>
            </div>
            <div>{errorElement}</div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} type="submit" className="btn btn-outline-dark">Sign Up with Google</button>
            </div>
        </div>
    );
};

export default Signup;