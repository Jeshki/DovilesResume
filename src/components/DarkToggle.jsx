// src/components/DarkToggle.jsx
import React, { useState, useEffect } from 'react';
// <<< Importuojame Radix Icons >>>
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

function DarkToggle() {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme === 'dark';
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    function toggleDark() {
        setDark(!dark);
    }

    return (
        <button
            onClick={toggleDark}
            className="p-2 rounded-md bg-green-200 dark:bg-green-800 hover:bg-green-700 dark:hover:bg-green-800 transition-colors duration-200"
            aria-label={dark ? "Aktyvuoti šviesų režimą" : "Aktyvuoti tamsų režimą"}
        >
            {/* Mėnulio ikonai neutralesnė spalva */}
            {dark ? <SunIcon className="text-yellow-400" /> : <MoonIcon className="text-gray-400" />} {/* Pakeista į Radix Icons */}
        </button>
    );
}

export default DarkToggle;