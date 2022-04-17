import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex flex-column align-items-center justify-content-center'>
            <h1 className='banner-title'>Explore...Through Writing</h1>
            <p className='banner-description'>There is something delicious about writing the first word of a story. You never quite know where they'll take you.</p>
        </div>
    );
};

export default Banner;