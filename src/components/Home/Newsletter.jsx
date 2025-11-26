"use client"
import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email subscription logic here
    alert(`Subscribed with ${email}`)
    setEmail('')
  }

  return (
    <div className="w-full py-16 ">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">Get the latest updates and special offers delivered to your inbox.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-auto flex-1"
          />
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}