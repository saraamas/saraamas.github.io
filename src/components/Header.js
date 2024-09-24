import React from 'react';

const Header = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header p-2 text-white w-full flex justify-center fixed top-0 z-20 font-mono">
      <nav>
        <ul className="flex space-x-10">
          <li>
            <button
              onClick={() => handleScroll('skills')}
              className="transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('projects')}
              className="transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('contact')}
              className="transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
