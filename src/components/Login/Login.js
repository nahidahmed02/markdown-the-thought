import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h2 className='mt-4 text-center'>Login</h2>
            <form className='w-25 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required />
                </div>
                <div className='text-center d-grid'>
                    <button type="submit" class="btn btn-outline-dark">Login</button>
                </div>
            </form>
            <p className='text-center mt-2'>
                Don't have an account?  <Link to='/signup' className='form-link'>Create an account</Link>
            </p>
        </div>
    );
};

export default Login;