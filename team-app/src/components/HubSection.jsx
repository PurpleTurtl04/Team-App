function HubSection() {
    return (
        <div className='3xl:container 3xl:mx-auto flex flex-col gap-6 overflow-hidden lg:flex-row lg:items-center lg:justify-between lg:gap-12'>
            <div className='container mx-auto flex flex-col items-center justify-center md:max-w-100 lg:w-1/2'>
                <h2 className='text-teamapp-darkblue mb-4 text-center text-4xl md:text-5xl lg:max-w-md lg:text-left lg:text-6xl/18'>
                    <span className='lg:-ml-1'>Your</span> hub for teamwork
                </h2>
                <div className='flex flex-col items-center lg:items-start lg:pl-2'>
                    <p className='text-teamapp-grey max-w-82 md:max-w-100'>
                        Project discussions, important documents, free food
                        announcements: they all live tidily together in Team.
                        With your team and information in one easily searchable
                        place, collaborating online is as easy as collaborating
                        in person.
                    </p>
                    <a
                        href='#'
                        className='text-teamapp-blue mt-4 flex items-center gap-1 font-bold'
                    >
                        Learn More{' '}
                        <span>
                            <img
                                src='src/assets/arrow_right.svg'
                                alt='blue arrow'
                            />
                        </span>
                    </a>
                </div>
            </div>
            <div className='lg:max-w-2/3'>
                <img
                    src='src/assets/dashboard-section-img.png'
                    alt='Sample Team App Dashboard'
                    className='lg:translate-x-1/3'
                />
            </div>
        </div>
    );
}

export default HubSection;
