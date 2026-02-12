import { useState } from 'react';

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            {/* Hamburger Icon (visible on mobile) */}
            <button
                onClick={toggleMenu}
                className='block py-3 md:hidden'
                aria-label='Toggle menu'
            >
                {/* Using a simple div stack for the icon, styled with Tailwind */}
                <div
                    className={`h-0.5 w-6 bg-white transition duration-300 ease-in-out ${isOpen ? 'translate-y-1.5 rotate-45 transform' : ''}`}
                ></div>
                <div
                    className={`my-1 h-0.5 w-6 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                ></div>
                <div
                    className={`h-0.5 w-6 bg-white transition duration-300 ease-in-out ${isOpen ? '-translate-y-1.5 -rotate-45 transform' : ''}`}
                ></div>
            </button>

            {/* Menu Items (hidden by default on mobile, visible on desktop) */}
            <div
                className={` ${isOpen ? 'block' : 'hidden'} bg-teamapp-darkblue/95 absolute top-full right-0 mt-2 w-48 rounded-md p-2 shadow-lg md:static md:mt-0 md:block md:w-auto md:rounded-none md:bg-transparent md:p-0 md:shadow-none`}
            >
                <ul className='flex w-full flex-col items-center gap-4 text-white md:flex-row md:items-center md:justify-around md:gap-6 lg:gap-10'>
                    <li>
                        <a
                            href='#'
                            className='hover:text-teamapp-blue/90 transition duration-150'
                        >
                            Product
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='hover:text-teamapp-blue/90 transition duration-150'
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='hover:text-teamapp-blue/90 transition duration-150'
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='hover:text-teamapp-blue/90 transition duration-150'
                        >
                            Log In
                        </a>
                    </li>
                    <button className='hover:text-teamapp-grey min-w-14 rounded-sm bg-white/20 px-6 py-3 transition duration-300 ease-in-out hover:bg-white'>
                        Get Access
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default HamburgerMenu;
