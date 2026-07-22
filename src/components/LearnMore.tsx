import aboutImage from '../assets/about-us-left.png';

function LearnMore () {
    return (
        <section className="learnMore">
            <div className="leftContent">
                <div className="leftTextContainer">
                    <h3>St. George International School, Excellence is our Watch Word!</h3>
                    <p className="leftText">We believe that every child has the potential to excel. Our school has been a nurturing ground for young minds, fostering a love for learning and a sprirt of curiosity. Our mission is to provide a well-rounded education that prepares students not only for academic success but also for life beyond the classroom.</p>
                </div>

                <button className="primaryButton">Learn more</button>
            </div>

            <div className="rightContent">
                <img src={aboutImage} alt="about us" />
            </div>
        </section>
    );
}

export default LearnMore;