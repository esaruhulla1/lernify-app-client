"use client";

import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // 👉 Show success popup
    await Swal.fire({
      title: "Registration Successful!",
      text: "Your account has been created.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // 👉 Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    // 👉 Redirect to login page
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleRegister}>

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input 
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Register Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>

        </form>

        {/* Extra Links */}
        <div className="text-center mt-5 text-sm">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}