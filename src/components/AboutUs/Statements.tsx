import MissionIcon from '../../assets/About us/mission-icon.svg'
import VisionIcon from '../../assets/About us/vision-icon.svg'
import ValuesIcon from '../../assets/About us/values-icon.svg'

function Statements () {
    
    const cards = [
        {
            icon: MissionIcon,
            heading: "Our Mission",
            text: "To nurture well-rounded individuals who are ready to make a positive impact on the world.",
        },
        {
            icon: VisionIcon,
            heading: "Our Vision",
            text: "To be a leading educational institution known for academic excellence and character development.",
        },
        {
            icon: ValuesIcon,
            heading: "Our Values",
            text: "Integrity, Curiosity, Empathy, Excellence, Collaboration. We value these values and its our leading light.",
        },
    ];

    return (
        <section className="statements">
            {cards.map((card, index) => (
                <div className="visionCard" key={index}>
                    <img src={card.icon} />
                    <h5>{card.heading}</h5>
                    <p>{card.text}</p>
                </div>
            ))}
        </section>
    );
}

export default Statements