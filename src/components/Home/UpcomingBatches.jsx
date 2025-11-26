import React from 'react'

const batches = [
  { course: "Web Development Bootcamp", startDate: "Dec 5, 2025", duration: "8 Weeks", mode: "Online", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { course: "Graphic Design Mastery", startDate: "Jan 10, 2026", duration: "6 Weeks", mode: "Offline", img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { course: "Digital Marketing Essentials", startDate: "Nov 30, 2025", duration: "4 Weeks", mode: "Online", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

export default function UpcomingBatches() {
  return (
    <div className="w-full py-16 ">
      <div className=" px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Batches</h2>

        <div className="flex flex-col h-[90vh] gap-6">
          {batches.map((batch, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
              <img src={batch.img} alt={batch.course} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">{batch.course}</h3>
                <p className="text-gray-600 mb-1"><strong>Start Date:</strong> {batch.startDate}</p>
                <p className="text-gray-600 mb-1"><strong>Duration:</strong> {batch.duration}</p>
                <p className="text-gray-600 mb-4"><strong>Mode:</strong> {batch.mode}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}