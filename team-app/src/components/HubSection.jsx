function HubSection() {
    return (
        <div className='container mx-auto flex flex-col gap-6 lg:flex-row lg:justify-between'>
            <div className='flex flex-col items-center lg:w-1/3'>
                <h1 className='text-teamapp-darkblue mb-4 text-center text-4xl md:text-5xl lg:text-left lg:text-6xl/18'>
                    Your hub for teamwork
                </h1>
                <p className='text-teamapp-grey max-w-82 md:max-w-100'>
                    Project discussions, important documents, free food
                    announcements: they all live tidily together in Team. With
                    your team and information in one easily searchable place,
                    collaborating online is as easy as collaborating in person.
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
            <div className='flex items-center justify-start lg:-mr-20 lg:w-2/3'>
                <img
                    src='src/assets/dashboard-section-img.png'
                    alt='Sample Team App Dashboard'
                    className='min-w-xl'
                />
            </div>
        </div>
    );
}

export default HubSection;
