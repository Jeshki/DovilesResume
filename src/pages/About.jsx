// src/pages/About.jsx
import React from 'react';
import { ReaderIcon, BookmarkIcon, BackpackIcon, GearIcon, PersonIcon, ArchiveIcon, CalendarIcon } from '@radix-ui/react-icons';

function About({ content }) {
    return (
        <div className="mt-10 max-w-4xl mx-auto px-4 mb-10 font-sans">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-green-100 uppercase font-display">
                {content.aboutTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Kairė skiltis - ne sticky mobiliesiems */}
                <div className="md:col-span-1 flex flex-col items-center md:sticky md:top-24">
                    <img
                        src="/dovile.jpg" alt={content.name}
                        className="rounded-lg w-full max-w-xs md:max-w-full object-cover mb-6 shadow-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3Ctext x='50' y='50' font-size='10' fill='%23ffffff' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E"; }}
                    />
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-green-100">{content.name}</h3>
                    <p className="text-gray-600 dark:text-green-300 mb-4">{content.title}</p>
                </div>

                {/* Dešinė skiltis su kortelėmis */}
                <div className="md:col-span-2 space-y-8">
                    {/* Apie mane */}
                    <div className="p-4 md:p-6 bg-white dark:bg-green-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-green-100">
                             <PersonIcon className="mr-2 text-green-600 dark:text-green-400"/> Apie mane
                        </h3>
                        <p className="mb-3 text-gray-700 dark:text-green-200">{content.aboutMeIntro}</p>
                        <p className="mb-3 text-gray-700 dark:text-green-200">{content.aboutMeExperience}</p>
                        <p className="text-gray-600 dark:text-green-300 italic">{content.aboutMeQualities}</p>
                    </div>

                    {/* Įgūdžiai */}
                    <div className="p-4 md:p-6 bg-white dark:bg-green-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-green-100">
                            <GearIcon className="mr-2 text-green-600 dark:text-green-400"/> {content.skillsTitle}
                        </h3>
                        {/* <<< Užtikriname, kad įgūdžiai persiskirstytų eilutėmis mažesniuose ekranuose >>> */}
                        <div className="flex flex-wrap gap-2">
                            {content.skillsList.map((skill, index) => (
                                <span key={index} className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-sm font-medium px-2.5 py-0.5 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Kalbos */}
                    <div className="p-4 md:p-6 bg-white dark:bg-green-900 rounded-lg shadow">
                         <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-green-100">
                            <ReaderIcon className="mr-2 text-green-600 dark:text-green-400"/> {content.languagesTitle}
                         </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-green-200">
                             {content.languagesList.map((lang, index) => (<li key={index}>{lang}</li>))}
                         </ul>
                    </div>

                     {/* Išsilavinimas */}
                     <div className="p-4 md:p-6 bg-white dark:bg-green-900 rounded-lg shadow">
                          <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900 dark:text-green-100">
                            <BookmarkIcon className="mr-2 text-green-600 dark:text-green-400"/> {content.educationTitle}
                          </h3>
                         {content.educationList.map((edu, index) => (
                             <div key={index} className="mb-2">
                                 <p className="font-semibold text-gray-800 dark:text-green-100">{edu.degree}</p>
                                 <p className="text-sm text-gray-600 dark:text-green-300">{edu.university} ({edu.years})</p>
                             </div>
                         ))}
                     </div>

                     {/* Darbo patirtis */}
                     <div className="p-4 md:p-6 bg-white dark:bg-green-900 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-green-100">
                            <BackpackIcon className="mr-2 text-green-600 dark:text-green-400"/> {content.experienceTitle}
                        </h3>
                        {content.experienceList.map((exp, index) => (
                             <div key={index} className="mb-5 pb-5 border-b border-gray-200 dark:border-green-800 last:border-b-0 last:mb-0 last:pb-0">
                                 <h4 className="font-semibold text-lg text-gray-800 dark:text-green-100 mb-1">{exp.title}</h4>
                                 <p className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1 mb-1">
                                     <ArchiveIcon /> {exp.company}
                                 </p>
                                 <p className="text-xs text-gray-500 dark:text-green-300 flex items-center gap-1 mb-2">
                                     <CalendarIcon /> {exp.period}
                                 </p>
                                 <p className="text-sm text-gray-700 dark:text-green-200">{exp.description}</p>
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;