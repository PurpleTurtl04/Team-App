import React, { useState } from 'react';

function HamburgerMenu() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(
    <div className="relative">
      {/* Hamburger Icon (visible on mobile) */}
      <button
        onClick={toggleMenu}
        className="block md:hidden p-3"
        aria-label="Toggle menu"
      >
        {/* Using a simple div stack for the icon, styled with Tailwind */}
        <div className={`w-6 h-0.5 bg-teamapp-darkblue transition duration-300 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-teamapp-darkblue my-1 transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-teamapp-darkblue transition duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* Menu Items (hidden by default on mobile, visible on desktop) */}
      <div
        className={`
          ${isOpen ? 'block' : 'hidden'}
          md:block
          absolute md:static top-full right-0
          bg-teamapp-grey/95 md:bg-transparent
          shadow-lg md:shadow-none
          p-2 md:p-0
          mt-2 md:mt-0
          rounded-md md:rounded-none
          w-48 md:w-auto
        `}
      >
        <ul className="flex flex-col w-full items-center md:items-center md:justify-around md:flex-row gap-4 md:gap-6 lg:gap-10 text-white">
          <li><a href='#' className='transition duration-150 hover:text-teamapp-yellow'>Product</a></li>
          <li><a href='#' className='transition duration-150 hover:text-teamapp-yellow'>Blog</a></li>
          <li><a href='#' className='transition duration-150 hover:text-teamapp-yellow'>Contact</a></li>
          <li><a href='#' className='transition duration-150 hover:text-teamapp-yellow'>Log In</a></li>
          <button className='hover:text-teamapp-grey rounded-sm bg-white/20 px-6 py-3 transition duration-300 ease-in-out hover:bg-white min-w-14'>
            Get Access
            </button>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu