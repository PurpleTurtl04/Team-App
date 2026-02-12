import Navbar from './Navbar';

function Hero() {
    return (
        <section>
            <div className="bg-shift-left-mobile container mx-auto h-screen max-h-270 max-w-480 bg-[url('assets/team-app-hero-img.jpg')] bg-cover bg-center">
                <Navbar />
            </div>
        </section>
    );
}

export default Hero;
