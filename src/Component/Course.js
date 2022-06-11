import React from 'react';

const Course = ({ course }) => {
    const { name, total_student, supplier, picture, prices } = course
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="pic" /></figure>
            <div class="card-body">
                <h2 class="card-title text-blue-500">{name}</h2>
                <h2 class="text-xl"><span className='text-gray-600'>Trainer:</span> {total_student}</h2>
                <h2 class="text-xl "><span className=' text-gray-600'>Trainer:</span> {supplier}</h2>

                <div class="card-actions justify-start">
                    <button class="btn btn-primary">Enrol Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;