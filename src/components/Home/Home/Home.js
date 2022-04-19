import React from 'react';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects';
import Services from '../Services/Services';

// sections that will show in home page
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;