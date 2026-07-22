function Hero () {
    return (
        <section className="heroSection">
            <div className="heroContent">

                <div className="heroTextContainer">
                    <h1 className="heroHeading">Welcome to St.George <span className="international">International School</span></h1>
                    <p className="heroText">A place where education, innovation and community come together. Our goal is to nurture global citizens and inspire future leaders</p>
                </div>

                <div className="heroButtonsContainer">
                    <button className="primaryButton">Apply now</button>
                    <button className="secondaryButton">Learn more</button>
                </div>

            </div>
        </section>
    );
}

export default Hero;