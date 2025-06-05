/// src/components/Footer.jsx
import React from 'react';
// <<< Pataisome importus: pašaliname FigmaLogoIcon ir įtraukiame FaFacebook >>>
import { EnvelopeClosedIcon, BellIcon, GlobeIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa'; // Importuojame FaFacebook iš react-icons/fa

function Footer({ content }) {
    const currentYear = new Date().getFullYear();
    const facebookUrl = "https://www.facebook.com/dovile.miciukeviciute";
    const linkedinUrl = "https://www.linkedin.com/in/dovile-miciukeviciute/";

    return (
        <footer className="mt-12 md:mt-20 p-6 text-center bg-green-100 dark:bg-green-900 text-sm">
             <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-4">
                {content.email && (
                     <a href={`mailto:${content.email}`} className="flex items-center gap-1 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                         <EnvelopeClosedIcon /> {content.email}
                     </a>
                 )}
                 {content.phone && (
                     <span className="flex items-center gap-1 text-green-800 dark:text-green-200">
                         <BellIcon /> {content.phone}
                     </span>
                 )}
                 {content.location && (
                      <span className="flex items-center gap-1 text-green-800 dark:text-green-200">
                         <GlobeIcon /> {content.location}
                     </span>
                 )}
                 <a
                    href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilis"
                    className="flex items-center gap-1 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                 >
                    <LinkedInLogoIcon /> LinkedIn
                 </a>
                 <a
                    href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook profilis"
                    className="flex items-center gap-1 text-green-800 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                 >
                    <FaFacebook /> Facebook
                 </a>
             </div>
            <p className="text-green-700 dark:text-green-300 ">{`\u00A9 ${currentYear} ${content.name}. ${content.footerText}`}</p>
        </footer>
    );
}

export default Footer;