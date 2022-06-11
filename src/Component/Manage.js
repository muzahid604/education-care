import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ManageCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://education-care.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `https://education-care.herokuapp.com/courses/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = courses.filter(course => course._id !== id);
                    setCourses(remaining);
                })
        }
    }

    return (
        <div className='overflow-x-auto'>
            <Navbar />
            <table className='table w-96 my-10 lg:w-full'>
                <thead>
                    <tr className=''>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    courses.length &&
                    courses?.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <td className='font-bold'>{item?.name}</td>
                                <td className=''><img className='table-img w-16' src={item.picture} alt="" /></td>
                                <td className=''><button onClick={() => handleDelete(item._id)} className='btn btn-xs'>DELETE</button></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
            <div className='text-center'>
                <Link to='/addCourses'><button className='btn btn-primary btn-outline my-10'>ADD NEW COURSES</button></Link>
            </div>
        </div>
    );
};

export default ManageCourses;