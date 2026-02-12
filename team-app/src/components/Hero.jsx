import Navbar from './Navbar';

function Hero() {
    return (
        <section>
            <div className="relative h-screen w-auto max-w-[1920px] bg-[url('assets/team-app-hero-img.jpg')] bg-cover bg-center">
                <Navbar />
            </div>
        </section>
    );
}

export default Hero;
