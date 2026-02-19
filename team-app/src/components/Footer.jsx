const footerData = [
    {
        title: 'Company',
        links: ['About Us', 'Careers', 'Support', 'Pricing'],
        contacts: [],
    },
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
            <div className='container mx-auto max-w-7xl px-6 py-10'>
                {/* Main Footer Section (Primary column + Four small columns) */}
                <div className='flex flex-wrap justify-between gap-4'>
                    {/* Primary Column (e.g., Logo, Description) */}
                    <div className='w-full text-center md:w-1/4 md:text-left'>
                        <h3 className='font-poppins text-3xl lg:pb-2'>
                            <span className='font-bold text-white'>team</span>
                            <span className='text-teamapp-blue font-bold'>
                                .
                            </span>
                        </h3>
                        <p className='text-gray-400 lg:max-w-40'>
                            Collaboration platform for modern teams.
                        </p>
                    </div>

                    {/* Four Evenly Distributed Columns */}
                    <div className='flex w-full flex-wrap justify-between md:w-2/3'>
                        {footerData.map((section, index) => (
                            <div
                                key={index}
                                className='mb-6 flex w-1/2 flex-col items-center text-center md:mb-0 md:w-1/4 md:items-start md:text-left'
                            >
                                <h4 className='mb-4 text-left text-lg'>
                                    {section.title}
                                </h4>
                                <ul className='flex flex-col gap-3'>
                                    {section.links.length > 0
                                        ? section.links.map((link) => (
                                              <li key={link}>
                                                  <a
                                                      href=''
                                                      className='text-teamapp-white/40 hover:text-teamapp-yellow transition duration-200 ease-in-out'
                                                  >
                                                      {link}
                                                  </a>
                                              </li>
                                          ))
                                        : section.contacts.map((contact) => (
                                              <li key={contact}>
                                                  <p className='text-teamapp-white/40 hover:text-teamapp-yellow transition duration-200 ease-in-out'>
                                                      {contact}
                                                  </p>
                                              </li>
                                          ))}
                                </ul>
                            </div>
                        ))}
                        <div className='mb-6 flex w-1/2 flex-col items-center text-center md:mb-0 md:w-1/4 md:items-start md:text-left'>
                            <h4 className='mb-4 text-left text-lg'>
                                Stay up to date
                            </h4>
                            <p className='text-teamapp-white/40'>
                                Subscribe to our newsletter
                            </p>
                            <input
                                type='email'
                                id='email-address'
                                className='w-xs rounded-sm border border-gray-300 bg-gray-50 p-5 text-sm text-gray-900 shadow-lg'
                                placeholder='name@example.com'
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className='mt-20 text-center md:mt-40 md:text-left'>
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
