import React from 'react'

const steps = [
  { title: "Browse Courses", description: "Explore our wide range of courses and find what suits you.", icon: "🔍" },
  { title: "Enroll", description: "Sign up and get instant access to your chosen courses.", icon: "📝" },
  { title: "Learn & Practice", description: "Start learning with structured lessons and practice exercises.", icon: "🎓" },
  { title: "Get Certificate", description: "Complete courses and receive a verified certificate.", icon: "🏆" },
]

export default function HowItWorks() {
  return (
    <div className="w-full py-16 ">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <span className="text-5xl mb-4">{step.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}