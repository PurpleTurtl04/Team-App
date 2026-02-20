import { useState, useEffect } from 'react';

import dashboardImage from '../assets/dashboard-section-img.png';
import dashboardLargeImage from '../assets/dashboard-section-large-img.png';

function HubSection() {
    const breakpointSmall = 1024;
    const breakpointLarge = 1536;

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='3xl:container 3xl:mx-auto mb-20 flex flex-col gap-4 overflow-hidden md:mb-35 lg:flex-row'>
            {/* Column 1 Content */}
            <div className='flex flex-1 flex-col items-center justify-center px-8 lg:pl-0'>
                <div className='xl-items-center flex flex-col items-center lg:ml-[10%] lg:items-start 2xl:ml-0'>
                    <h2 className='text-teamapp-darkblue mb-4 max-w-xs text-center text-4xl md:max-w-sm md:text-left lg:text-5xl/15 2xl:max-w-none'>
                        <span className='lg:-ml-1'>Your</span> hub for teamwork
                    </h2>
                    <p className='text-teamapp-grey xs:text-justify max-w-88 text-left lg:max-w-105 lg:text-left'>
                        Project discussions, important documents, free food
                        announcements: they all live tidily together in Team.
                        With your team and information in one easily searchable
                        place, collaborating online is as easy as collaborating
                        in person.
                    </p>
                </div>
            </div>

            {/* Column 2 Content */}
            <div className='mr-1 flex flex-1 translate-x-30 justify-center sm:translate-x-0 lg:mr-0'>
                <img
                    src={
                        screenSize.width < breakpointSmall ||
                        screenSize.width > breakpointLarge
                            ? dashboardImage
                            : dashboardLargeImage
                    }
                    alt='sample app dashboard'
                    className='min-w-2xl'
                />
            </div>
        </div>
    );
}

export default HubSection;
