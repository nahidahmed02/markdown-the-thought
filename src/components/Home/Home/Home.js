import React from 'react';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects';
import Services from '../Services/Services';

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