import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { FaGoogle } from "react-icons/fa";


const Login = () => {
//   return (
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { FaGoogle } from 'react-icons/fa';
// import logo from '../assets/footer-logo.png'; // ✅ sid-bookstore logo path (adjust as per your folder structure)

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const handleGoogleSignIn = () => {
//     // your google sign-in logic
//   };

//   const message = ''; // Or your error message state

  return (
<div className='h-[calc(100vh-120px)] flex justify-center items-center '> 
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='test-xl font-semibold mb-4'> Please Login </h2> 
        <form >
            <div>
                <label className='block text-grey-700 text-sm font-bold mb-2'
                htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" placeholder='Email Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/> 
                </div>
            </form>

    </div>

</div>









    // <div className='h-screen bg-gradient-to-r from-blue-200 via-white to-purple-200 flex justify-center items-center'>
    //   <div className='w-full max-w-sm mx-auto bg-white shadow-lg rounded-2xl px-8 pt-10 pb-8 relative'>
    //     {/* sid-bookstore logo */}
    //     <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
    //       <img src={logo} alt="sid-bookstore" className="w-16 h-16 object-contain rounded-full" />
    //     </div>

    //     <h2 className='text-2xl font-bold text-center mb-6 mt-6 text-gray-800'>Welcome Back</h2>

    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div className='mb-4'>
    //         <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
    //         <input
    //           {...register("email", { required: true })}
    //           type="email"
    //           id="email"
    //           placeholder='Enter your email'
    //           className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
    //         />
    //       </div>

    //       <div className='mb-4'>
    //         <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
    //         <input
    //           {...register("password", { required: true })}
    //           type="password"
    //           id="password"
    //           placeholder='Enter your password'
    //           className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
    //         />
    //       </div>

    //       {message && <p className='text-red-500 text-sm italic mb-3'>{message}</p>}

    //       <button type="submit" className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200'>
    //         Login
    //       </button>
    //     </form>

    //     <p className='text-sm mt-4 text-center'>
    //       Don’t have an account?
    //       <Link to="/register" className='text-blue-600 hover:underline ml-1'>Register</Link>
    //     </p>

    //     {/* Google sign in */}
    //     <div className='mt-6'>
    //       <button
    //         onClick={handleGoogleSignIn}
    //         className='w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200'
    //       >
    //         <FaGoogle />
    //         Sign in with Google
    //       </button>
    //     </div>

    //     <p className='mt-6 text-center text-gray-400 text-xs'>© 2025 sid-bookstore. All rights reserved.</p>
    //   </div>
    // </div>
  )
}

export default Login
