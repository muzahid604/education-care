import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import Loading from './Loading';
import logimg from '../Assets/stephen-andrews-u0zTce7KNlY-unsplash.jpg';
import Navbar from './Navbar';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset()
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };
    if (user || gUser) {
        navigate('/home')
    }
    if (loading || gLoading) {
        return <Loading />
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    return (
        <div>
            <Navbar />
            <div className='flex max-h-screen justify-around m-10 items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full mt-5 max-w-xs text-white' type="submit" value="Sign Up" />
                            {signInError}
                        </form>
                        <p><small>Already have an Account  <Link className='text-primary' to="/login">Please Log In</Link></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline"
                        >Continue with Google</button>
                    </div>
                </div>
                <div className='w-0 md:w-80 lg:w-96'>
                    <img className='bg-base-100 shadow-xl rounded-lg' src={logimg} alt="" />
                </div>
            </div >
        </div>

    );
};

export default Register;