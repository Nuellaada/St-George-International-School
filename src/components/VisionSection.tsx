import missionIcon from '../assets/mission-icon.svg'
import visionIcon from '../assets/vision-icon.svg'
import valueIcon from '../assets/value-icon.svg'

function VisionSection () {
    return (
        <section className="visionSection">

            <div className="visionCard">
                <div className="visionIcon">
                    <img src= {missionIcon}alt="missionIcon" />
                </div>
                <div className="visionTextCont">
                    <h4 className="visionHeading">Our Mission</h4>
                    <p className="visionBody">To nurture well-rounded individuals who are ready to make a positive impact on the world.</p>
                </div>
            </div>

             <div className="visionCard">
                <div className="visionIcon">
                    <img src= {visionIcon} alt="vissionIcon" />
                </div>
                <div className="visionTextCont">
                    <h4 className="visionHeading">Our Mission</h4>
                    <p className="visionBody">To nurture well-rounded individuals who are ready to make a positive impact on the world.</p>
                </div>
            </div>

             <div className="visionCard">
                <div className="visionIcon">
                    <img src= {valueIcon} alt="valueIcon" />
                </div>
                <div className="visionTextCont">
                    <h4 className="visionHeading">Our Values</h4>
                    <p className="visionBody">Integrity, Curiosity, Empathy, Excellence, Collaboration. We value these values and its our leading light.</p>
                </div>
            </div>

        </section>
    );
}

export default VisionSection;