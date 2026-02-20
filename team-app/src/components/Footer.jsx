const footerData = [
    {
        title: 'Features',
        links: [
            'Screen Sharing',
            'iOS & Android Apps',
            'File Sharing',
            'User Management',
        ],
        contacts: [],
    },
    {
        title: 'Company',
        links: ['About Us', 'Careers', 'Support', 'Pricing'],
        contacts: [],
    },
    {
        title: 'Contact Us',
        links: [],
        contacts: [
            'info@teamapp.com',
            '1-800-200-300',
            '1010 Sunset Blv. Palo Alto, California',
        ],
    },
];

function Footer() {
    return (
        <div className='bg-teamapp-footerblue pt-15 text-white'>
            <div className='3xl:px-15 container mx-auto px-6 py-10'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8'>
                    {/* Primary Column */}
                    <div className='col-span-1 mb-4 text-center sm:col-span-4 md:col-span-3 lg:col-span-4 lg:text-left xl:col-span-2'>
                        <h3 className='font-poppins text-3xl xl:pb-2'>
                            <span className='font-bold text-white'>team</span>
                            <span className='text-teamapp-blue font-bold'>
                                .
                            </span>
                        </h3>
                        <p className='text-gray-400 xl:max-w-40'>
                            Collaboration platform for modern teams.
                        </p>
                    </div>
                    {/* Three Columns */}
                    {footerData.map((section, index) => (
                        <div
                            key={index}
                            className='col-span-1 mb-2 min-w-32 text-center sm:col-span-2 md:col-span-1 md:mb-0 lg:text-left'
                        >
                            <h4 className='mb-2 text-center text-[18px] lg:text-left'>
                                {section.title}
                            </h4>
                            <ul className='flex flex-col items-center gap-1 lg:items-start'>
                                {section.links.length > 0
                                    ? section.links.map((link) => (
                                          <li key={link}>
                                              <a
                                                  href=''
                                                  className='text-teamapp-white/40 hover:text-teamapp-yellow max-w-30 text-[14px] transition duration-200 ease-in-out'
                                              >
                                                  {link}
                                              </a>
                                          </li>
                                      ))
                                    : section.contacts.map((contact) => (
                                          <li key={contact}>
                                              <p className='text-teamapp-white/40 hover:text-teamapp-yellow max-w-30 text-[14px] transition duration-200 ease-in-out'>
                                                  {contact}
                                              </p>
                                          </li>
                                      ))}
                            </ul>
                        </div>
                    ))}
                    {/* Subscribe Column */}
                    <div className='col-span-1 mb-6 flex flex-col items-center text-center sm:col-span-2 md:col-span-3 md:mt-10 md:mb-0 md:text-left lg:col-span-1 lg:mt-0 lg:items-start lg:text-left xl:col-start-7'>
                        <h4 className='mb-2 text-center text-[18px] xl:text-left'>
                            Stay up to date
                        </h4>
                        <p className='text-teamapp-white/40 min-w-60 text-center text-[14px] lg:text-left'>
                            Subscribe to our newsletter
                        </p>
                        <div className='relative'>
                            <input
                                type='email'
                                id='email-address'
                                className='relative w-60 rounded-sm bg-white/10 p-5 text-sm text-white/80 shadow-lg xl:w-64'
                                placeholder='name@example.com'
                            />
                            <button
                                type='submit'
                                class='hover:text-teamapp-yellow absolute inset-y-0 right-0 flex items-center pr-3 text-white/60'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    class='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fill-rule='evenodd'
                                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                        clip-rule='evenodd'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className='mt-20 text-center md:mt-40 lg:text-left'>
                    <p className='text-teamapp-white/40'>
                        &copy; {new Date().getFullYear()} Copyright Team Inc.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
