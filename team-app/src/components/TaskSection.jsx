import arrow from '../assets/arrow_right.svg';
import taskImage from '../assets/task-section-img.png';

function TaskSection() {
    return (
        <div class='container mx-auto mb-20 flex flex-col-reverse gap-4 md:mb-40 md:flex-row lg:justify-around'>
            {/* Column 1 Content */}
            <div class='mx-auto flex flex-1 justify-center bg-blue-200 px-8 md:justify-end'>
                <img
                    src={taskImage}
                    alt='woman sitting on a couch'
                    className='max-w-108 md:max-w-88 lg:max-w-120'
                />
            </div>

            {/* Column 2 Content */}
            <div class='flex flex-1 flex-col items-center bg-green-200 px-8 md:items-start md:justify-center'>
                <h2 class='text-teamapp-darkblue mb-4 max-w-xs text-center text-4xl md:max-w-md md:text-left lg:text-5xl'>
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
                    className='text-teamapp-blue mt-5 flex items-center gap-1 font-bold'
                >
                    Learn More{' '}
                    <span>
                        <img src={arrow} alt='blue arrow' />
                    </span>
                </a>
            </div>
        </div>
    );
}

export default TaskSection;
