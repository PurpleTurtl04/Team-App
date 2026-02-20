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
                {/* Main Footer Section (Primary column + Four small columns) */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-8'>
                    {/* Primary Column (e.g., Logo, Description) */}
                    <div className='col-span-1 mb-4 text-center sm:col-span-4 lg:col-span-2 lg:text-left'>
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
                    {/* <div className='grid-cols-1'> */}
                    {footerData.map((section, index) => (
                        <div
                            key={index}
                            className='col-span-1 mb-2 min-w-32 text-center sm:col-span-2 md:mb-0 lg:col-span-1 lg:text-left'
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
                                                  className='text-teamapp-white/40 hover:text-teamapp-yellow text-[14px] transition duration-200 ease-in-out'
                                              >
                                                  {link}
                                              </a>
                                          </li>
                                      ))
                                    : section.contacts.map((contact) => (
                                          <li key={contact}>
                                              <p className='text-teamapp-white/40 hover:text-teamapp-yellow text-[14px] transition duration-200 ease-in-out'>
                                                  {contact}
                                              </p>
                                          </li>
                                      ))}
                            </ul>
                        </div>
                    ))}
                    <div className='col-span-1 mb-6 flex flex-col items-center text-center sm:col-span-2 md:mb-0 md:text-left lg:col-span-2 lg:col-start-7 lg:items-start lg:text-left'>
                        <h4 className='mb-2 text-center text-[18px] lg:mb-4 xl:text-left'>
                            Stay up to date
                        </h4>
                        <p className='text-teamapp-white/40 text-[14px]'>
                            Subscribe to our newsletter
                        </p>
                        <input
                            type='email'
                            id='email-address'
                            className='w-64 rounded-sm border border-gray-300 bg-gray-50 p-5 text-sm text-gray-900 shadow-lg'
                            placeholder='name@example.com'
                        />
                    </div>
                    {/* </div> */}
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

// <div className='bg-teamapp-footerblue pt-15 text-white'>
//     <div className='container mx-auto max-w-7xl px-6 py-10'>
//         {/* Main Footer Section (Primary column + Four small columns) */}
//         <div className='flex flex-wrap justify-between gap-4'>
//             {/* Primary Column (e.g., Logo, Description) */}
//             <div className='w-full text-center md:w-1/4 md:text-left'>
//                 <h3 className='font-poppins text-3xl lg:pb-2'>
//                     <span className='font-bold text-white'>team</span>
//                     <span className='text-teamapp-blue font-bold'>
//                         .
//                     </span>
//                 </h3>
//                 <p className='text-gray-400 lg:max-w-40'>
//                     Collaboration platform for modern teams.
//                 </p>
//             </div>

//             {/* Four Evenly Distributed Columns */}
//             <div className='flex w-full flex-wrap justify-between md:w-2/3'>
//                 {footerData.map((section, index) => (
//                     <div
//                         key={index}
//                         className='mb-6 flex w-1/2 flex-col items-center text-center md:mb-0 md:w-1/4 md:items-start md:text-left'
//                     >
//                         <h4 className='mb-4 text-left text-lg'>
//                             {section.title}
//                         </h4>
//                         <ul className='flex flex-col gap-3'>
//                             {section.links.length > 0
//                                 ? section.links.map((link) => (
//                                       <li key={link}>
//                                           <a
//                                               href=''
//                                               className='text-teamapp-white/40 hover:text-teamapp-yellow transition duration-200 ease-in-out'
//                                           >
//                                               {link}
//                                           </a>
//                                       </li>
//                                   ))
//                                 : section.contacts.map((contact) => (
//                                       <li key={contact}>
//                                           <p className='text-teamapp-white/40 hover:text-teamapp-yellow transition duration-200 ease-in-out'>
//                                               {contact}
//                                           </p>
//                                       </li>
//                                   ))}
//                         </ul>
//                     </div>
//                 ))}
//                 <div className='mb-6 flex w-1/2 flex-col items-center text-center md:mb-0 md:w-1/4 md:items-start md:text-left'>
//                     <h4 className='mb-4 text-left text-lg'>
//                         Stay up to date
//                     </h4>
//                     <p className='text-teamapp-white/40'>
//                         Subscribe to our newsletter
//                     </p>
//                     <input
//                         type='email'
//                         id='email-address'
//                         className='w-xs rounded-sm border border-gray-300 bg-gray-50 p-5 text-sm text-gray-900 shadow-lg'
//                         placeholder='name@example.com'
//                     />
//                 </div>
//             </div>
//         </div>

//         {/* Copyright Section */}
//         <div className='mt-20 text-center md:mt-40 md:text-left'>
//             <p className='text-teamapp-white/40'>
//                 &copy; {new Date().getFullYear()} Copyright Team Inc.
//                 All rights reserved.
//             </p>
//         </div>
//     </div>
// </div>;
