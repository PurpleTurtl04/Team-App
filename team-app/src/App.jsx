import './App.css';
import Hero from './components/Hero';
import MainAppContent from './components/MainAppContent';

function App() {
    return (
        <div className='font-cabin 3xl:container mx-auto'>
            <header>
                <Hero />
            </header>
            <main>
                <MainAppContent />
            </main>
        </div>
    );
}

export default App;
