import React from 'react'

const instructors = [
  { name: "John Doe", expertise: "Web Development", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jane Smith", expertise: "Graphic Design", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Johnson", expertise: "Digital Marketing", img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Emily Davis", expertise: "Data Science", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Mikle Real", expertise: "Machine Learning ", img: "https://randomuser.me/api/portraits/men/34.jpg" },
]

export default function TopInstructors() {
  return (
    <div className="w-full py-16 ">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Instructors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {instructors.map((inst, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <img src={inst.img} alt={inst.name} className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg" />
              <h3 className="text-xl font-semibold">{inst.name}</h3>
              <p className="text-gray-600">{inst.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}