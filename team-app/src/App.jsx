import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MainAppContent from './components/MainAppContent';

function App() {
    return (
        // Consider adding 3xl:container class if that works better than max-w-7xl
        <div className='font-cabin bg-teamapp-white'>
            <div className='3xl:container mx-auto'>
                <header>
                    <Hero />
                </header>
                <main>
                    <MainAppContent />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export default App;
