import HubSection from './HubSection';
import TaskSection from './TaskSection';
import TestSection from './TestSection';

function MainAppContent() {
    return (
        <section className='mt-20'>
            <HubSection />
            <TestSection />
            <TaskSection />
        </section>
    );
}

export default MainAppContent;
