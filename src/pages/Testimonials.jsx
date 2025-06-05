// src/pages/Testimonials.jsx
import React from 'react';

function Testimonials({ content }) {
    // Generinė nuotrauka, jei avataras nenurodytas arba nepavyksta įkelti
    const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3Ctext x='50' y='50' font-size='10' fill='%23ffffff' text-anchor='middle' dy='.3em'%3ENo Img%3C/text%3E%3C/svg%3E";

    return (
        <div className="mt-10 max-w-4xl mx-auto px-4 mb-10 font-sans">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-green-100 uppercase font-display">
                {content.testimonialsTitle}
            </h2>
            <p className="text-center text-gray-700 dark:text-green-200 mb-8">
                {content.testimonialsIntro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left"> {/* Pridėta flex-col sm:flex-row ir tekstų lygiavimas */}
                        <img
                            src={testimonial.avatar || defaultAvatar}
                            alt={testimonial.name}
                            className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0 border-2 border-green-300 dark:border-green-700" // Padidintas dydis mobiliajam
                            onError={(e) => { e.target.onerror = null; e.target.src = defaultAvatar; }}
                        />
                        <div>
                            <p className="text-gray-800 dark:text-green-200 italic mb-2">"{testimonial.text}"</p>
                            <p className="font-semibold text-gray-900 dark:text-green-100">{testimonial.name}</p>
                            <p className="text-sm text-gray-600 dark:text-green-300">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;