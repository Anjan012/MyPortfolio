import "./Hero.css";

export const Hero = ({projectRef}) => { 
    return (
        <>
            <main>
                <section className="hero">
                <div className="hero-content">
                    <h1>Hello, I'm <span>Anjan</span></h1>
                    <p>A beginner Web Developer learning React & building projects.</p>
                    <button className="hero-btn" onClick={() => projectRef.current.scrollIntoView({ behavior: 'smooth' })}>View My Projects</button>
                </div>
            </section>
        </main >
        </>
    )
}