export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Minh</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Front-End
                        </span>(" ")
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br /> Dolorum, quos, voluptatum. Quisquam, voluptas.
                    </p>
                </div>
                <button className="btn btn--primary">Get in touch</button>
                </div>
                <div className="hero--section--img">
                    <img src="./Group 1.png" alt="Hero Section"/>
                </div>
        </section>
    );
    
}