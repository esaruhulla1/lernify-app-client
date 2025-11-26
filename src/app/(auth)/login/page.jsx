"use client";

import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Login() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 👉 Show success popup
    await Swal.fire({
      title: "Login Successful!",
      text: "Welcome back!",
      icon: "success",
      confirmButtonText: "OK",
    });

    // 👉 Clear form
    setFormData({
      email: "",
      password: ""
    });

    // 👉 Redirect to home page
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Extra Links */}
        <div className="text-center mt-5 text-sm">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 font-medium hover:underline">
              Create Account
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}