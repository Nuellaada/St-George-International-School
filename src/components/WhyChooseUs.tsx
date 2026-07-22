import bookIcon from '../assets/book-open.svg';
import environmentIcon from '../assets/environment.svg';
import boxIcon from '../assets/box.svg';
import radioIcon from '../assets/radio.svg';

function WhyChooseUs() {
    return (
        <section className="whyChooseUs">
            <h2 className="center">Why choose our school</h2>

            <div className="whyChooseUsContainer">

                <div className="whyChooseLeft">
                    <div className="topImageContainer"></div>
                    <div className="bottomImageContainer">
                        <div className="bottomImage1"></div>
                        <div className="bottomImage2"></div>
                    </div>
                </div>
                
                <div className="whyChooseRight">

                    <div className="whyChooseCard">
                        <div className="cardIcon">
                            <img src={bookIcon} alt="EducationIcon" />
                        </div>
                        <div className="cardTextContainer">
                            <h5 className="cardHeading">Quality education</h5>
                            <p className="cardText">We offer a comprehensive curriculum designed to inspire and challenge students</p>
                        </div>
                    </div>

                    <div className="whyChooseCard">
                        <div className="cardIcon">
                            <img src={environmentIcon} alt="EnvironmentIcon" />
                        </div>
                        <div className="cardTextContainer">
                            <h5 className="cardHeading">Safe environment</h5>
                            <p className="cardText">Our school prioritizes safety and well-being, fostering a secure place for learning</p>
                        </div>
                    </div>
                    
                    <div className="whyChooseCard">
                        <div className="cardIcon">
                            <img src={boxIcon} alt="FacilityIcon" />
                        </div>
                        <div className="cardTextContainer">
                            <h5 className="cardHeading">Great facility</h5>
                            <p className="cardText">We offer a state-of-the-art facility designed to support holistic education for students</p>
                        </div>
                    </div>

                    <div className="whyChooseCard">
                        <div className="cardIcon">
                            <img src={radioIcon} alt="CommunityIcon" />
                        </div>
                        <div className="cardTextContainer">
                            <h5 className="cardHeading">Strong community</h5>
                            <p className="cardText">We believe in collaboration among students, parents and staff to create a community</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;