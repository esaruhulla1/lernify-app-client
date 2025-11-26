import React from 'react'

const categories = [
  { name: "Development", icon: "💻" },
  { name: "Design", icon: "🎨" },
  { name: "Marketing", icon: "📢" },
  { name: "Business", icon: "📊" },
  { name: "Language", icon: "🌍" },
  { name: "Data Science", icon: "📈" }
]

export default function Categories() {
  return (
    <div className="w-full py-16 ">
      <div className=" mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Browse Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 shadow-md rounded-2xl hover:shadow-lg transition-all cursor-pointer">
              <span className="text-4xl mb-3">{cat.icon}</span>
              <p className="text-lg font-semibold text-gray-500">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}