import React from 'react';

export default function Banner() {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
            // style={{ backgroundImage: "url('https://images.unsplash.com/photo-1758612214946-140394b0ecef?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Smarter with Lernifi</h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                    Your all-in-one platform to manage, track, and accelerate your learning journey.
                </p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg shadow-lg transition-all">
                    Get Started
                </button>
            </div>
        </div>
    );
}
