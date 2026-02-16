import HubSection from './HubSection';
import ScheduleSection from './ScheduleSection';
import TaskSection from './TaskSection';
import TestSection from './TestSection';

function MainAppContent() {
    return (
        <section className='mt-20'>
            {/* <HubSection /> */}
            <TaskSection />
            <ScheduleSection />
        </section>
    );
}

export default MainAppContent;
