import arrow from '../assets/arrow_right.svg';
import scheduleImage from '../assets/schedule-section-img.png';

function ScheduleSection() {
    return (
        <div class='container mx-auto flex flex-col gap-4 md:flex-row'>
            {/* Column 1 Content */}
            <div class='flex flex-1 flex-col items-center px-8 md:items-start md:justify-center'>
                <h2 class='text-teamapp-darkblue mb-3 max-w-lg text-4xl lg:text-5xl'>
                    Simplest task management
                </h2>
                <p className='text-teamapp-grey max-w-105'>
                    Task management with Team is as simple as it gets. No
                    complicated layout and need for user training. Your team
                    members will intuitively know how to navigate the platform.
                    It’s so simple, a baby could do it!
                </p>
                <a
                    href='#'
                    className='text-teamapp-blue mt-4 flex items-center gap-1 font-bold'
                >
                    Learn More{' '}
                    <span>
                        <img src={arrow} alt='blue arrow' />
                    </span>
                </a>
            </div>

            {/* Column 2 Content */}
            <div class='flex-1 px-8'>
                <img src={scheduleImage} alt='woman sitting on a couch' />
            </div>
        </div>
    );
}

export default ScheduleSection;
