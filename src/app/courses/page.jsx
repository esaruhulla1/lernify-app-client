
import Link from 'next/link'
import React from 'react'

export default async function Courses() {

    const res = await fetch('https://lernify-app-server.vercel.app/courses', {
        cache: "no-store"
    });
    const data = await res.json();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            
            {/* Page Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-3">Our Courses</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our high-quality courses designed to help you improve your skills
                    and grow your career.
                </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.map(course => (
                    <div 
                        key={course._id} 
                        className=" shadow-md rounded-xl overflow-hidden border border-gray-700 hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="h-40 overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-2">
                            
                            {/* Title */}
                            <h2 className="text-xl font-semibold line-clamp-1">
                                {course.title}
                            </h2>

                            {/* Short Description */}
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {course.description}
                            </p>

                            {/* Price */}
                            <p className="text-lg font-bold text-blue-600 mt-1">
                                ${course.price}
                            </p>

                            {/* Details Button */}
                            <Link 
                                href={`/courses/${course._id}`}
                                className="mt- inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
