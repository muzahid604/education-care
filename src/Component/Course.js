import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { _id, name, total_student, supplier, picture } = course
    const navigate = useNavigate();
    const navigateToItemDetail = _id => {
        navigate(`/course/${_id}`);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="pic" /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-500">{name}</h2>
                <h2 className="text-xl"><span className='text-gray-600'>Enroled:</span> {total_student}</h2>
                <h2 className="text-xl "><span className=' text-gray-600'>Trainer:</span> {supplier}</h2>

                <div className="card-actions justify-start">
                    <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary">Enrol Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;