import HamburgerMenu from './HamburgerMenu';

function Navbar() {
    return (
        <div>
            <div className='mx-auto flex items-center justify-between px-8 pt-10 pb-15 md:mx-0 md:pb-36'>
                <h3 className='font-poppins text-3xl lg:pb-2'>
                    <span className='font-bold text-white'>team</span>
                    <span className='text-teamapp-blue font-bold'>.</span>
                </h3>
                <nav>
                    <HamburgerMenu />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
