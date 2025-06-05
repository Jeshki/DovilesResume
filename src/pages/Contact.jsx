// src/pages/Contact.jsx
import React from 'react';
import { EnvelopeClosedIcon, BellIcon, GlobeIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa';

function Contact({ content }) {
  const facebookUrl = "https://www.facebook.com/dovile.miciukeviciute";
  const linkedinUrl = "https://www.linkedin.com/in/dovile-miciukeviciute/";

  return (
    <div className="mt-10 max-w-3xl mx-auto px-4 mb-10 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-green-100 uppercase font-display">
        {content.contactTitle || 'Kontaktai'}
      </h2>
      <p className="text-center text-gray-700 dark:text-green-200 mb-10">
        {content.contactIntro || 'Turite klausimų ar norite pasitarti? Susisiekite Jums patogiu būdu.'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tiesioginiai Kontaktai */}
        <div className="bg-white dark:bg-green-900 p-4 md:p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-green-100">{content.directContactTitle || 'Tiesioginiai Kontaktai'}</h3>
          <div className="space-y-4">
            {content.email && (
              <a href={`mailto:${content.email}`} className="flex items-center gap-3 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                <EnvelopeClosedIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{content.email}</span>
              </a>
            )}
            {content.phone && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-green-200">
                <BellIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{content.phone}</span>
              </div>
            )}
            {content.location && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-green-200">
                <GlobeIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{content.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Socialiniai Tinklai */}
        <div className="bg-white dark:bg-green-900 p-4 md:p-6 rounded-lg shadow">
           <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-green-100">{content.socialMediaTitle || 'Socialiniai Tinklai'}</h3>
           <div className="space-y-4">
             <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                <LinkedInLogoIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>LinkedIn</span>
             </a>
             <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                <FaFacebook className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" /> Facebook
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;