import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import logo from '../assets/footer-logo.png'; // Uncomment if you use logo

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const message = ''; // Error message can be handled via state if needed
  const onSubmit = (data) => console.log(data);

  const handleGoogleSignIn = () => {
    console.log("Google Sign In Clicked");
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 via-white to-purple-200'>
      <div className='w-full max-w-sm bg-white shadow-2xl rounded-2xl px-8 pt-10 pb-8 relative'>

        {/* Optional Logo */}
        {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
          <img src={logo} alt="sid-bookstore" className="w-16 h-16 object-contain rounded-full" />
        </div> */}

        <h2 className='text-2xl font-bold text-center mb-6 mt-4 text-gray-800'>Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder='Enter your email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
            {errors.email && <p className='text-red-500 text-xs mt-1'>Email is required</p>}
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder='Enter your password'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
            {errors.password && <p className='text-red-500 text-xs mt-1'>Password is required</p>}
          </div>

          {/* Optional error message */}
          {message && (
            <p className='text-red-500 text-sm italic mb-3'>{message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200'
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className='text-sm mt-4 text-center'>
          Haven't an account?
          <Link to="/register" className='text-blue-600 hover:underline ml-1'>Register</Link>
        </p>

        {/* Google Sign-In Button */}
        <div className='mt-6'>
          <button
            onClick={handleGoogleSignIn}
            className='w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200'
          >
            <FaGoogle />
            Sign in with Google
          </button>
        </div>

        <p className='mt-6 text-center text-gray-400 text-xs'>© 2025 sid-bookstore. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
