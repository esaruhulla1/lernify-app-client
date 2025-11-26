import Link from 'next/link';
import React from 'react'

export default async function CourseDetails({ params }) {
  const { id } = await params
  const res = await fetch(`https://lernify-app-server.vercel.app/course/${id}`)
  const data = await res.json();
  // console.log({ data });
    const {
    title,
    description,
    image,
    price,
    instructor,
    category,
    lessons,
    createdAt,
  } = data;



  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      {/* Back Button */}
      <Link
        href="/courses"
        className="inline-block text-sm px-4 py-2 bbg-gray-200 rounded hover:bg-gray-300 transition"
      >
        ← Back to Courses
      </Link>

      {/* Banner Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title + Main Info */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        {/* Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 bbg-gray-50 rounded-lg border">
          <div>
            <h4 className="font-semibold text-gray-400">Price</h4>
            <p className="text-gray-500">${price}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-400">Instructor</h4>
            <p className="text-gray-500">{instructor}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-400">Category</h4>
            <p className="text-gray-500">{category}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-400">Published</h4>
            <p className="text-gray-500">
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Lessons Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Lessons</h2>

        <div className="space-y-3">
          {lessons?.map((lesson, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg bbg-white shadow-sm flex justify-between"
            >
              <span className="font-medium">{lesson.title}</span>
              <span className="text-gray-600">{lesson.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
