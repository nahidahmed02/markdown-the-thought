import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Signup.css'

const Signup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className='text-danger text-center'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/')
    }
    return (
        <div>
            <h2 className='mt-4 text-center'>Sign Up</h2>
            <form className='w-25 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required />
                </div>
                <div className='text-center d-grid'>
                    <button type="submit" class="btn btn-outline-dark">Sign Up</button>
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
            <p>{errorElement}</p>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} type="submit" class="btn btn-outline-dark">Sign Up with Google</button>
            </div>
        </div>
    );
};

export default Signup;