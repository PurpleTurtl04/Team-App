import amyGoldberg from '../assets/AmyGoldberg.png';
import linaSloan from '../assets/LinaSloan.png';
import jonJandali from '../assets/JonJandali.png';
import stars from '../assets/stars.svg';

const reviewsData = [
    {
        name: 'Amy Goldberg',
        title: 'COO at Slack',
        comment:
            'Team has completely streamlined how we run meetings and manage cross-department tasks. Visibility, accountability, and execution have all improved. It’s become an essential part of our operations.',
        image: amyGoldberg,
        grid: 'col-span-1 md:col-span-3 lg:col-span-1',
    },
    {
        name: 'Lina Sloan',
        title: 'Content Writer at Uber',
        comment:
            'I love how easy Team makes it to track assignments and deadlines. Meeting notes and tasks are all in one place, which keeps my workflow organized and stress-free.',
        image: linaSloan,
        grid: 'col-span-1 md:col-span-3 md:col-start-4 lg:col-span-1',
    },
    {
        name: 'Jon Jandali',
        title: 'CTO at Loom',
        comment:
            'Team delivers exactly what we need—efficient scheduling, clear task ownership, and seamless collaboration. It’s intuitive, reliable, and integrates smoothly into our daily processes',
        image: jonJandali,
        grid: 'col-span-1 md:col-span-4 md:col-start-2 lg:col-span-1 ml-0 md:ml-12 lg:ml-0',
    },
];

function Reviews() {
    return (
        <div className='container mx-auto mb-40 flex flex-col items-center px-8 lg:items-start'>
            <h2 className='text-teamapp-darkblue mb-5 max-w-xs text-center text-4xl md:mb-10 md:max-w-md md:text-left lg:mb-15 lg:max-w-none lg:text-5xl'>
                What people say about{' '}
                <span className='text-teamapp-blue font-semibold'>Team</span>
            </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-3 xl:gap-10 2xl:gap-20'>
                {reviewsData.map((review, index) => (
                    <div
                        key={index}
                        className={`text-teamapp-grey flex max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 drop-shadow-md ${review.grid}`}
                    >
                        <div>
                            <img
                                src={stars}
                                alt='golden stars'
                                className='mt-10 mb-6 w-25'
                            />
                            <p>{review.comment}</p>
                        </div>
                        <div className='mt-20 mb-6 flex gap-5'>
                            <img
                                src={review.image}
                                alt={`Image of ${review.name}`}
                                className='h-12 w-12'
                            />
                            <div className='flex flex-col'>
                                <p className='font-bold'>{review.name}</p>
                                <p>{review.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
