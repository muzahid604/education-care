import React from 'react';
import Banner from '../Component/Banner';
import Courses from '../Component/Courses';
import Extra from '../Component/Extra';
import Feature from '../Component/Feature';

const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
            <Feature />
            <Extra />
        </div>
    );
};

export default Home;