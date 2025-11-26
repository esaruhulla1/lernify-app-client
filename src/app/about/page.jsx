import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full">


      {/* OUR STORY */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-gray-200">
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-8">
          We started our journey with a simple mission — to make education accessible, modern, and practical.
          Our platform is built for learners who want real skills, real growth, and real opportunities.
          Every course is designed by industry experts to help students build strong foundations and launch successful careers.
          <br />
          <span className="font-bold">🌐 Universal Accessibility:</span> We break down geographical and financial barriers, ensuring quality education is available to students across the globe. 🛠️ Focus on Practical Application: Our curriculum prioritizes hands-on projects, case studies, and simulations alongside theory, ensuring students can immediately apply what they learn in the workplace.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="py- px-6 max-w-4xl mx-auto text-gray-300">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-400 leading-7">
              We deliver structured, industry-ready learning experiences to help learners succeed in the real world.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Skill Development</h3>
            <p className="text-gray-400 leading-7">
              Our courses are hands-on, practical, and designed to build real-world skills that employers value.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Global Access</h3>
            <p className="text-gray-400 leading-7">
              Learn from anywhere, at any time, on your own schedule. Education should have no boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-gray-300 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
        <div className="flex flex-col sm:flex-row justify-around gap-12">
          <div>
            <p className="text-5xl font-bold ">20K+</p>
            <p className="mt-2 text-gray-400">Students Worldwide</p>
          </div>
          <div>
            <p className="text-5xl font-bold ">150+</p>
            <p className="mt-2 text-gray-400">Courses Published</p>
          </div>
          <div>
            <p className="text-5xl font-bold ">50+</p>
            <p className="mt-2 text-gray-400">Expert Instructors</p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Want to Know More?</h2>
        <p className="text-gray-400 mb-6">
          Reach out to us anytime — we’d love to help you start your learning journey!
        </p>

        <a
          href="#"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}