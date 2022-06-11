import React from 'react';
import addpic from '../Assets/thomas-park-PjQ8VIZrZRE-unsplash.jpg'
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';


const AddCourses = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://education-care.herokuapp.com/courses`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            });
    };
    return (
        <div>
            <Navbar />
            <div className='w-50  mx-auto  p-4' >
                <h4 className='text-4xl my-10 text-center text-red-400'>ADD A COURSE</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>

                        <form className='flex flex-col items-center justify-center rounded-lg m-5 bg-red-300 p-10' onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Course name' {...register("name", { required: true })} />
                            <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Short description' {...register("description")} />
                            <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Photo URL' {...register("picture")} />
                            <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Trainer Name' {...register("supplier")} />
                            <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Price' type="number" {...register("FOBPrices")} />
                            <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Enter Quantity' type="number" {...register("total_student")} />
                            <input className='mb-2 input input-bordered w-full max-w-xs' type="submit" value="Add Course" />
                        </form>
                    </div>
                    <div className='m-5 p-10'>
                        <img src={addpic} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddCourses;