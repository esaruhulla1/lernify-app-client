import React from 'react'

const features = [
  { title: "Expert Instructors", description: "Learn from industry experts with years of experience.", icon: "👨‍🏫" },
  { title: "Structured Curriculum", description: "Step-by-step courses designed for easy learning.", icon: "📚" },
  { title: "Certificate of Completion", description: "Get recognized certificates after finishing courses.", icon: "🎓" },
  { title: "Lifetime Access", description: "Access course materials anytime, anywhere.", icon: "⏳" },
]

export default function WhyChooseUs() {
  return (
    <div className="w-full py-16 ">
      <div className=" mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Lernifi?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all text-center">
              <span className="text-5xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}