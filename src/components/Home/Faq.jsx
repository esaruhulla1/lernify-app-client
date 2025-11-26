"use client"
import React, { useState } from 'react'

const faqs = [
    { question: "How long do I have access to the courses?", answer: "You get lifetime access to all enrolled courses and materials." },
    { question: "Do I get a certificate after completion?", answer: "Yes, all completed courses provide a verified certificate of completion." },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, PayPal, and other popular payment methods." },
    { question: "Can I get a refund if I'm not satisfied?", answer: "Yes, we offer a 14-day money-back guarantee for all courses." },
]

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full py-16 ">
            <div className=" mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-xl overflow-hidden">
                            <button
                                className="w-full text-left px-6 py-4 flex justify-between items-center  font-semibold"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 text-gray-400 border-t">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}