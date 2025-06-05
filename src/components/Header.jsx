// src/components/Header.jsx
import React, { useState } from 'react'; // <<< Importuojame useState >>>
import { NavLink } from 'react-router-dom';
import DarkToggle from './DarkToggle';
import { HomeIcon, PersonIcon, EnvelopeClosedIcon, QuoteIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'; // <<< Pridedame hamburger ir kryžiuko ikonas >>>
import { FaFacebook } from 'react-icons/fa';

function Header({ lang, setLang, content }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // <<< Nauja būsena meniu valdymui >>>

    const toggleMenu = () => { // <<< Funkcija meniu atidarymui/uždarymui >>>
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-4 bg-green-100 dark:bg-green-900 shadow-md gap-y-2">
            {/* Vardas (naudojame font-display - Poiret One) */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-green-100 uppercase font-display">{content.name}</h1>

            {/* Hamburger meniu mygtukas mobiliesiems */}
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 transition-colors"
                aria-label="Atidaryti/uždaryti meniu"
            >
                {isMenuOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
            </button>

            {/* Navigacija */}
            <nav className={`
                ${isMenuOpen ? 'flex' : 'hidden'} 
                md:flex flex-col md:flex-row 
                w-full md:w-auto 
                gap-y-2 md:gap-y-0 
                items-center gap-x-2 md:gap-x-4
                bg-green-100 dark:bg-green-900 md:bg-transparent md:dark:bg-transparent
                p-4 md:p-0 rounded-b-lg md:rounded-none
                shadow-md md:shadow-none
                absolute md:relative top-full left-0
            `}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `flex items-center gap-1 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                    onClick={() => setIsMenuOpen(false)} // <<< Uždaryti meniu po paspaudimo >>>
                >
                    <HomeIcon className="mr-0.5" />
                    {content.navHome}
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => `flex items-center gap-1 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <PersonIcon className="mr-0.5" />
                    {content.navAbout}
                </NavLink>
                <NavLink
                    to="/testimonials"
                    className={({ isActive }) => `flex items-center gap-1 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <QuoteIcon className="mr-0.5" />
                    {content.navTestimonials}
                </NavLink>
                 <NavLink
                    to="/contact"
                    className={({ isActive }) => `flex items-center gap-1 text-gray-700 dark:text-green-200 hover:text-green-600 dark:hover:text-green-300 transition-colors ${isActive ? 'font-bold text-green-700 dark:text-green-100' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <EnvelopeClosedIcon className="mr-0.5" />
                    {content.navContact}
                </NavLink>

                {/* Kalbos keitimas ir tamsus režimas */}
                <div className="flex items-center gap-2 mt-2 md:mt-0 md:ml-2 border-t md:border-t-0 border-green-300 dark:border-green-700 pt-2 md:pt-0 pl-0 md:pl-2 w-full md:w-auto justify-center md:justify-start flex-shrink-0">
                     <button
                        onClick={() => { setLang('lt'); setIsMenuOpen(false); }}
                        className={`px-2 py-1.5 rounded text-gray-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 transition-colors ${lang === 'lt' ? 'font-bold bg-green-200 dark:bg-green-700' : ''}`}
                        aria-label="Pakeisti kalbą į lietuvių"
                    >
                        <span className="fi fi-lt"></span> <span className="hidden md:inline">LT</span>
                     </button>
                     <button
                        onClick={() => { setLang('en'); setIsMenuOpen(false); }}
                        className={`px-2 py-1.5 rounded text-gray-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 transition-colors ${lang === 'en' ? 'font-bold bg-green-200 dark:bg-green-700' : ''}`}
                        aria-label="Switch language to English"
                    >
                        <span className="fi fi-gb"></span> <span className="hidden md:inline">EN</span>
                     </button>
                    <DarkToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;