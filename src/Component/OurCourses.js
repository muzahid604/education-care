import React from 'react';
import Courses from './Courses';
import Navbar from './Navbar';

const OurCourses = () => {
    return (
        <div >
            <Navbar />
            <Courses className='mb-10' />
        </div>
    );
};

export default OurCourses;