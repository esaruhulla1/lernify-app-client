"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AddCoursePage() {
    const [lessons, setLessons] = useState([
        { title: "", duration: "" },
    ]);

    // Add new lesson input row
    const addLesson = () => {
        setLessons([...lessons, { title: "", duration: "" }]);
    };

    // Update lesson field
    const updateLesson = (index, field, value) => {
        const updated = [...lessons];
        updated[index][field] = value;
        setLessons(updated);
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const newCourse = {
            title: form.title.value,
            description: form.description.value,
            image: form.image.value,
            price: Number(form.price.value),
            category: form.category.value,
            instructor: form.instructor.value,
            lessons: lessons,
            createdAt: new Date(),
        };

        const res = await fetch("http://localhost:5000/add-course", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCourse),
        });

        if (res.ok) {
            Swal.fire({
                title: "Success!",
                text: "Course added successfully!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });

            form.reset();
            setLessons([{ title: "", duration: "" }]);
        } else {
            Swal.fire({
                title: "Failed!",
                text: "Could not add course.",
                icon: "error",
            });
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Add New Course</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block font-medium mb-1 ">Course Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="w-full border px-3 py-2 rounded border-gray-600"
                        placeholder="Web Development Bootcamp"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        required
                        className="w-full border px-3 py-2 rounded border-gray-600"
                        rows="4"
                        placeholder="Write course description..."
                    ></textarea>
                </div>

                {/* Image */}
                <div>
                    <label className="block font-medium mb-1">Course Image URL</label>
                    <input
                        type="text"
                        name="image"
                        required
                        className="w-full border px-3 py-2 rounded border-gray-600"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block font-medium mb-1">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        required
                        className="w-full border px-3 py-2 rounded border-gray-600"
                        placeholder="150"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <input
                        type="text"
                        name="category"
                        required
                        className="w-full border px-3 py-2 rounded border-gray-600"
                        placeholder="Development"
                    />
                </div>

                {/* Instructor */}
                <div>
                    <label className="block font-medium mb-1">Instructor Name</label>
                    <input
                        type="text"
                        name="instructor"
                        required
                        className="w-full border px-3 py-2 rounded border-gray-600"
                        placeholder="John Doe"
                    />
                </div>

                {/* LESSONS */}
                <div>
                    <label className="block font-medium mb-2">Lessons</label>

                    {lessons.map((lesson, index) => (
                        <div
                            key={index}
                            className="flex gap-3 mb-3 border p-3 rounded border-gray-600"
                        >
                            <input
                                type="text"
                                placeholder="Lesson Title"
                                className="flex-1 border px-2 py-1 rounded border-gray-600"
                                value={lesson.title}
                                onChange={(e) =>
                                    updateLesson(index, "title", e.target.value)
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Duration (e.g. 30 min)"
                                className="w-40 border px-2 py-1 rounded border-gray-600"
                                value={lesson.duration}
                                onChange={(e) =>
                                    updateLesson(index, "duration", e.target.value)
                                }
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addLesson}
                        className="px-3 py-1 bg-blue-600 text-white rounded "
                    >
                        + Add Lesson
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded text-lg mt-4"
                >
                    Add Course
                </button>
            </form>
        </div>
    );
}