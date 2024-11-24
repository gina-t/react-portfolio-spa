import React, { useState } from 'react';
import logoBeat from '../assets/beat.svg';
import logoCode from '../assets/code.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1 lg:justify-start">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Dr Gina Tsanaktsidis</span>
          <img className="h-8 w-auto" src={logoBeat} alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:w-auto">
        <a href="#about-me" className="text-base font-semibold text-slate-900">About Me</a>
        <a href="#portfolio" className="text-base font-semibold text-slate-900">Portfolio</a>
        <a href="#contact" className="text-base font-semibold text-slate-900">Contact</a>
        <a href="#resume" className="text-base font-semibold text-slate-900">Resume</a>
        <a href="#blogposts" className="text-base font-semibold text-slate-900">Blog Posts</a>
      </div>
      <div className="flex lg:flex-1 lg:justify-end">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Dr Gina Tsanaktsidis</span>
          <img className="h-8 w-auto" src={logoCode} alt="logo" />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Dr Gina Tsanaktsidis</span>
                <img className="h-8 w-auto" src={logoBeat} alt="Logo" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* mobile menu items */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  <a href="#about-me" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">About Me</a>
                  <a href="#portfolio" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Portfolio</a>
                  <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Contact</a>
                  <a href="#resume" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800">Resume</a>
                </div>
                <div className="py-6">
                  <Link to="/blogposts" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800">
                    Blog Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

