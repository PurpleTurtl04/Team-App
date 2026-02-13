import Navbar from './Navbar';

function Hero() {
    return (
        <section>
            <div className="bg-shift-left-mobile flex h-screen max-h-270 max-w-480 flex-col bg-[url('assets/team-app-hero-img.jpg')] bg-cover bg-center">
                <div className='3xl:px-15 container mx-auto'>
                    <Navbar />
                    <div className='mt-40 flex flex-col justify-center px-8 text-white md:mt-10'>
                        <h1 className='mb-4 max-w-xs text-4xl md:max-w-md md:text-5xl lg:max-w-xl lg:text-6xl/18'>
                            Instant collaboration for remote teams
                        </h1>
                        <h4 className='mb-12 max-w-sm md:text-lg lg:text-xl'>
                            All-in-one place for your remote team to chat,
                            collaborate and track project progress.
                        </h4>
                        <div className='flex flex-col gap-2 md:flex-row'>
                            <input
                                type='email'
                                id='email-address'
                                class='w-xs rounded-sm border border-gray-300 bg-gray-50 p-5 text-sm text-gray-900 shadow-lg'
                                placeholder='name@example.com'
                                required
                            />
                            <button class='group bg-teamapp-blue relative max-w-38 overflow-hidden rounded-sm p-5'>
                                <span class='relative z-10'>
                                    Get Early Access
                                </span>
                                <span class='absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-20'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
