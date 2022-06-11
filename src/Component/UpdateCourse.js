import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCourse = () => {
    const { coursesId } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/course/${coursesId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [coursesId])

    let { name, total_student, supplier, picture } = course
    const updateForDelivery = () => {
        if (course.total_student > 0) {
            let Quantity = parseInt(course.total_student);
            Quantity = parseInt(Quantity - 1);
            let updateItems = { Quantity };
            // item.quantity = updateItems;
            // console.log(updateItems)

            const url = `http://localhost:5000/course/${coursesId}`
            console.log(url)
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItems)
            })
                .then(res => res.json())
                .then(data => {
                    // setItem(data)
                    setCourse(data)
                        ;
                })
        }
    }
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="pic" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-blue-500">{name}</h2>
                    <h2 class="text-xl"><span className='text-gray-600'>Enroled:</span> {total_student}</h2>
                    <h2 class="text-xl "><span className=' text-gray-600'>Trainer:</span> {supplier}</h2>

                    <div class="card-actions justify-start">
                        <button onClick={() => updateForDelivery()} class="btn btn-primary">Update Student</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourse;