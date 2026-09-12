import nurseryImg from '../../assets/About us/nurseryImg.png'
import primaryImg from '../../assets/About us/primaryImg.png'
import secondaryImg from '../../assets/About us/secondaryImg.png'

function GradeLevels () {
    const divisions = [
        {
            image: nurseryImg,
            heading: "Nursery",
            subtext: "A strong start for the future",
            classes: ["Nursery 1", "Nursery 2", "Nursery 3"],
        },
        {
            image: primaryImg,
            heading: "Primary",
            subtext: "A strong start for the future",
            classes: ["Basic 1", "Basic 2", "Basic 3", "Basic 4", "Basic 5", "Basic 6"],
        },
        {
            image: secondaryImg,
            heading: "Secondary",
            subtext: "A strong start for the future",
            classes: ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"],
        },
    ];
    
    return (
        <section className="gradeLevel">
            <h4>Our Grade Levels</h4>

            <div className="glCardContainer">
                {divisions.map((division, index) => (
                    <div className="glCard" key={index}>
                        <img src={division.image} alt={division.heading} />

                        <div className="glCardTextCont">
                            <h4 className="glCardHead">{division.heading}</h4>
                            <p className="glCardText">{division.subtext}</p>
                        </div>

                        {division.classes.length <= 3 ? (
                            <div className="glCardList">
                                {division.classes.map((cls, i) => (
                                    <div className="glCardItem" key={i}>
                                        <img src="" alt="" />
                                        <p className="glCardListText">{cls}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="glCardListContainer">
                                <div className="glCardListA">
                                    {division.classes.slice(0, 3).map((cls, i) => (
                                        <div className="glCardItem" key={i}>
                                            <img src="" alt="" />
                                            <p className="glCardListText">{cls}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="glCardListB">
                                    {division.classes.slice(3).map((cls, i) => (
                                        <div className="glCardItem" key={i}>
                                            <img src="" alt="" />
                                            <p className="glCardListText">{cls}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className="primaryButton">Apply now</button>
        </section>
    );
}

export default GradeLevels;