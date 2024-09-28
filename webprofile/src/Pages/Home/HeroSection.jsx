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
                                Hi, I'm Minh. I'm happy to connect with everyone.
                        <br /> I always want to be 1% better every day.
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