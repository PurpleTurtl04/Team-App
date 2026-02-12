import Navbar from './Navbar';

function Hero() {
    return (
        <section>
            <div className="bg-shift-left-mobile h-screen max-h-270 max-w-480 bg-[url('assets/team-app-hero-img.jpg')] bg-cover bg-center">
                <Navbar />
                <div className='container mx-auto mt-40 flex flex-col justify-center px-8 text-white md:px-0'>
                    <h1 className='mb-4 text-4xl'>
                        Instant collaboration for remote teams
                    </h1>
                    <h4 className='mb-12 max-w-sm'>
                        All-in-one place for your remote team to chat,
                        collaborate and track project progress.
                    </h4>
                    <div className='flex flex-col gap-2'>
                        <input
                            type='email'
                            id='email-address'
                            class='max-w-xs rounded-sm border border-gray-300 bg-gray-50 p-5 text-sm text-gray-900'
                            placeholder='name@example.com'
                            required
                        />
                        <button className='bg-teamapp-blue hover:bg-teamapp-blue/80 max-w-38 rounded-sm p-5 transition duration-150 ease-in-out'>
                            Get Early Access
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
