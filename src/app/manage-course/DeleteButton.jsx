"use client";
import React from "react";
import Swal from "sweetalert2";

export default function DeleteButton({ id }) {
  const handleDelete = async () => {
    // Confirm Dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This course will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    // Delete Request
    const res = await fetch(`https://lernify-app-server.vercel.app/course/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      // Success Alert
      Swal.fire({
        title: "Deleted!",
        text: "Course has been deleted successfully.",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });

      // Refresh page
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } else {
      // Error Alert
      Swal.fire({
        title: "Failed!",
        text: "Failed to delete the course.",
        icon: "error",
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
    >
      Delete
    </button>
  );
}