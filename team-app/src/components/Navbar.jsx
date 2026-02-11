import HamburgerMenu from "./HamburgerMenu"

function Navbar() {
    return (
        <div>
            <div className='container mx-auto flex items-center justify-between pt-10 pb-15 md:pb-36 xl:px-10'>
            <p className='font-poppins text-3xl lg:pb-2 pl-3 md:pl-0'>
                <span className='font-bold text-white'>team</span>
                <span className='font-bold text-teamapp-blue'>.</span>
            </p>
            <nav>
                <HamburgerMenu/>
            </nav>
        </div>
        </div>
    )
}

export default Navbar
