import HamburgerMenu from './HamburgerMenu';

function Navbar() {
    return (
        <div>
            <div className='3xl:px-10 container mx-auto flex items-center justify-between pt-10 pb-15 md:pb-36'>
                <p className='font-poppins pl-3 text-3xl md:pl-0 lg:pb-2'>
                    <span className='font-bold text-white'>team</span>
                    <span className='text-teamapp-blue font-bold'>.</span>
                </p>
                <nav>
                    <HamburgerMenu />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
