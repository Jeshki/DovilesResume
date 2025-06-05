// src/components/PageFade.jsx
import React from 'react';
// <<< Importuojame motion >>>
import { motion } from 'framer-motion';

// Galime priimti ir perduoti 'key', jei reikia specifiškesnio valdymo, bet App.jsx jau jį priskiria
function PageFade({ children }) {
    return (
        <motion.div
            // key={key} // Nebūtina, jei key jau priskirtas App.jsx
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

export default PageFade;