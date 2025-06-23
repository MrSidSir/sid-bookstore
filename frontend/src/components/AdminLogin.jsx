import React, { useState } from 'react' // 🎯 React & useState for managing local state
import { useForm } from "react-hook-form" // 📋 react-hook-form for form handling

import axios from "axios" // 🌐 For HTTP requests
import getBaseUrl from '../utils/baseURL' // 🔗 Custom base URL utility
import { useNavigate } from 'react-router-dom' // 🚗 For redirecting user after login


const AdminLogin = () => {
    const [message, setMessage] = useState("") // 📝 Local state to display error messages

    // 🧾 React Hook Form setup
    const {
        register,             // 🖊️ To register input fields
        handleSubmit,         // ✅ Handles form submit
        watch,                // 👀 (Optional) For watching input values
        formState: { errors } // ⚠️ To handle validation errors
    } = useForm()

    const navigate = useNavigate() // 🚀 Hook for programmatic navigation

    // 🔐 Function to handle admin login
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const auth = response.data; // 📥 Response contains token & user info

            if(auth.token) {
                localStorage.setItem('token', auth.token); // 💾 Save JWT to localStorage

                // 🕐 Set token expiry manually after 1 hour
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has been expired!, Please login again.');
                    navigate("/")
                }, 3600 * 1000)
            }

            alert("Admin Login successful!") // ✅ Notify login success
            navigate("/dashboard")           // ➡️ Redirect to admin dashboard

        } catch (error) {
            setMessage("Please provide a valid email and password") // ❌ Set error message
            console.error(error) // 🧱 Debug error in console
        }
    }

        return (
        <div className='h-screen flex justify-center items-center '>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl font-semibold mb-4'>Admin Dashboard Login </h2>

                {/* 📄 Form component with submit handler */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* 🔤 Username field */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Username</label>
                        <input 
                            {...register("username", { required: true })} // ✅ Validation: required
                            type="text" name="username" id="username" placeholder='username'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>

                    {/* 🔐 Password field */}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input 
                            {...register("password", { required: true })} // ✅ Validation: required
                            type="password" name="password" id="password" placeholder='Password'
                            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>

                    {/* ⚠️ Show error message if present */}
                    {
                        message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                    }

                    {/* 🔘 Submit button */}
                    <div className='w-full'>
                        <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login</button>
                    </div>
                </form>

                {/* 📜 Footer */}
                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    )
}

export default AdminLogin // 📦 Exporting component to use in router
