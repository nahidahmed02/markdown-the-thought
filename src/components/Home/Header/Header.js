import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';

// navbar
const Header = () => {
    const [user] = useAuthState(auth);

    // logout button
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h4 className='text-light ms-5 fst-italic'>Markdown The Thought</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-5">
                            <li className="nav-item">
                                <CustomLink to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to='/blogs'>Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to='/about'>About</CustomLink>
                            </li>

                            {/* dynamic login and logout button */}
                            <li className="nav-item">
                                {
                                    user ?
                                        <button onClick={handleLogOut}>Log Out</button>
                                        :
                                        <CustomLink to='/login'>Login</CustomLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;