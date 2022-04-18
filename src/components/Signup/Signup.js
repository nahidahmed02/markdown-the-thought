import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
        </div>
    );
};

export default Signup;