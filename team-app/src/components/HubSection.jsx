import { useState, useEffect } from 'react';

import dashboardImage from '../assets/dashboard-section-img.png';
import dashboardLargeImage from '../assets/dashboard-section-large-img.png';

function HubSection() {
    const breakpoint = 1024;

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
        <div className='mb-20 flex flex-col gap-4 overflow-hidden md:mb-35 lg:flex-row xl:container xl:mx-auto'>
            {/* Column 1 Content */}
            <div className='flex flex-1 flex-col items-center justify-center px-8 lg:pl-0'>
                <div className='flex flex-col items-center lg:ml-[10%] lg:items-start xl:ml-0'>
                    <h2 className='text-teamapp-darkblue mb-4 max-w-xs text-center text-4xl md:max-w-sm md:text-left lg:text-5xl/15'>
                        <span className='lg:-ml-1'>Your</span> hub for teamwork
                    </h2>
                    <p className='text-teamapp-grey max-w-88 text-justify lg:max-w-105 lg:text-left'>
                        Project discussions, important documents, free food
                        announcements: they all live tidily together in Team.
                        With your team and information in one easily searchable
                        place, collaborating online is as easy as collaborating
                        in person.
                    </p>
                </div>
            </div>

            {/* Column 2 Content */}
            <div className='mr-1 flex flex-1 justify-center lg:mr-0'>
                <img
                    src={
                        screenSize.width < breakpoint
                            ? dashboardImage
                            : dashboardLargeImage
                    }
                    alt='sample app dashboard'
                />
            </div>
        </div>
    );
}

export default HubSection;
