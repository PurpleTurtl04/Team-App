import HubSection from './HubSection';
import Reviews from './Reviews';
import ScheduleSection from './ScheduleSection';
import TaskSection from './TaskSection';

function MainAppContent() {
    return (
        <section className='mt-20'>
            <HubSection />
            <TaskSection />
            <ScheduleSection />
            <Reviews />
        </section>
    );
}

export default MainAppContent;
