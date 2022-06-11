import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Navbar from './Navbar';

const Banner = () => {

    return (
        <div className='banner-div'>
            <Navbar />
            {/* <img src={banner} alt="" /> */}
            <div className='banner-text'>
                <h1 className='uppercase'>A learning platform that helps you to learning faster</h1>
                <h4 className='' >World-class training and development programs developed by top teachers</h4>
                <Link to='/'>
                    <button className="btn btn-gray-500 btn-outline ">Explore All Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;