import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importa los iconos de React Icons

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-5 right-4 z-50 bg-gray-800 text-white px-2 py-2 rounded-full shadow-md"
    >
      {darkMode ? <FaSun /> : <FaMoon />} {/* Usa los iconos en lugar de texto */}
    </button>
  );
};

export default DarkModeButton;

