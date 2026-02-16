import arrow from '../assets/arrow_right.svg';
import taskImage from '../assets/task-section-img.png';

function TaskSection() {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-6 lg:flex-row'>
                <div className='flex flex-col lg:w-1/2'>
                    <h2 className='text-teamapp-darkblue mb-3 text-center text-4xl md:text-5xl lg:max-w-md lg:text-6xl/18'>
                        Simplest task management
                    </h2>
                    <p className='text-teamapp-grey max-w-sm pl-0.5'>
                        Task management with Team is as simple as it gets. No
                        complicated layout and need for user training. Your team
                        members will intuitively know how to navigate the
                        platform. It’s so simple, a baby could do it!
                    </p>
                    <a
                        href='#'
                        className='text-teamapp-blue mt-4 flex items-center justify-center gap-1 font-bold'
                    >
                        Learn More{' '}
                        <span>
                            <img src={arrow} alt='blue arrow' />
                        </span>
                    </a>
                </div>
                <div className='lg:w-1/2'>
                    <img src={taskImage} alt='woman sitting on a couch' />
                </div>
            </div>
        </div>
    );
}

export default TaskSection;
