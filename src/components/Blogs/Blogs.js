import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='Q-A'>Q: What is the difference between authorization and authentication?</h2>
            <p className='Q-A'>A: Some of the differences between authorization and authentication are given below -
                <br />
                <br />
                1. A user's authority checked for accessing the resources, in authorization process; but in authentication, a user's identity are checked for providing the access to the system.
                <br />
                2. Authentication is done before authorization.
                <br />
                3. Users are validated in authorization; while in authentication, users are verified.
            </p>

            <h2 className='Q-A mt-5'>Q: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='Q-A'>A: I use Firebase because it has all the features that helped me to grow my apps. Firebase is less technical and time-saving. Besides Firebase we also have 'React Firebase Hooks', 'Certificate-based authentication' etc to implement authentication.
            </p>


        </div>
    );
};

export default Blogs;