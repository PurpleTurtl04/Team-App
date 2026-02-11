import Navbar from "./Navbar"

function Hero() {
    return (
        <section>
            <div className="relative bg-[url('assets/team-app-hero-img.jpg')] bg-cover bg-center h-screen max-w-[1920px] w-auto">
                <Navbar/>
            </div>
        </section>
    )
}

export default Hero
