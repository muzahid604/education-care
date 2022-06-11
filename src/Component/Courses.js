import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className=''>
                <h1 className='text-4xl text-center my-10 font-bold'>Top categories you can enroll now</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-5/6 mx-auto gap-8'>
                    {
                        courses?.map(course =>
                            <Course
                                course={course}
                            ></Course>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;