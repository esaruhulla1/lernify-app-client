import React from "react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

// 🚀 Server Component
export default async function ManageCourse() {
  // 1. Load all courses
  const res = await fetch("https://lernify-app-server.vercel.app/courses", {
    cache: "no-store",
  });
  const courses = await res.json();

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>

      {/* Table Wrapper */}
      <div className="overflow-x-auto border border-gray-500 rounded-lg">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="">
            <tr className="text-left">
              <th>#</th>
              <th>Image</th>
              <th>Course Title</th>
              <th>Price</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-12 object-cover rounded-md"
                  />
                </td>

                <td>{course.title}</td>

                <td>${course.price}</td>

                {/* ACTION BUTTONS */}
                <td className="text-right space-x-2">
                  {/* View Button */}
                  <Link
                    href={`courses/${course._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
                  >
                    View
                  </Link>

                  {/* Delete Button */}
                  <DeleteButton id={course._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}