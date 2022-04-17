import React from 'react';
import notfound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;