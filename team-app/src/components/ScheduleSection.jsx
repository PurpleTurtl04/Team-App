import arrow from '../assets/arrow_right.svg';
import scheduleImage from '../assets/schedule-section-img.png';

function ScheduleSection() {
    return (
        <div className='container mx-auto mb-20 flex flex-col gap-4 md:mb-40 md:flex-row'>
            {/* Column 1 Content */}
            <div className='flex flex-1 flex-col items-center justify-center px-8'>
                <div className='flex flex-col items-center md:items-start md:text-left'>
                    <h2 className='text-teamapp-darkblue mb-4 max-w-xs text-center text-4xl md:max-w-md md:text-left lg:text-5xl/15'>
                        Scheduling that actually works
                    </h2>
                    <p className='text-teamapp-grey max-w-105 text-justify md:text-left'>
                        Integrated a Team calendar with your favorite calendar
                        app, be it Google Calendar or iCal.
                    </p>
                    <p className='text-teamapp-grey max-w-105 pt-2 text-justify md:text-left'>
                        Each team member works with their favorite calendar,
                        while all the date is synced with the master calendar.
                    </p>
                    <a
                        href='#'
                        className='text-teamapp-blue mt-5 flex items-center gap-1 font-bold transition duration-300 hover:scale-110'
                    >
                        Learn More{' '}
                        <span>
                            <img src={arrow} alt='blue arrow' />
                        </span>
                    </a>
                </div>
            </div>

            {/* Column 2 Content */}
            <div className='flex flex-1 justify-center px-8'>
                <img
                    src={scheduleImage}
                    alt='woman sitting on a couch'
                    className='max-w-108 rounded-lg md:max-w-88 lg:max-w-120'
                />
            </div>
        </div>
    );
}

export default ScheduleSection;
