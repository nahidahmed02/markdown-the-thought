import React from 'react';
import project1 from '../../../images/project1.jpg';
import project2 from '../../../images/project2.jpg';
import project3 from '../../../images/project3.jpg';

// extra section
const MyProjects = () => {
    return (
        <div className='container'>
            <h3 className='services-title text-center mt-5 mb-3 fw-bold'>My Projects</h3>
            <div className='row'>
                <div className='g-4 col-lg-4'>
                    <img src={project1} alt="" width={350} height={300} style={{ borderRadius: '7px' }} />
                </div>
                <div className='g-4 col-lg-4'>
                    <img src={project2} alt="" width={350} height={300} style={{ borderRadius: '7px' }} />
                </div>
                <div className='g-4 col-lg-4'>
                    <img src={project3} alt="" width={350} height={300} style={{ borderRadius: '7px' }} />
                </div>
            </div>

        </div >
    );
};

export default MyProjects;