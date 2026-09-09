import polygonIcon from '../../assets/About us/Polygon 1.svg'

function SetsApart () {

    const listItems = [
        "Experienced and dedicated staff",
        "Small class sizes",
        "Diverse extracurricular programs",
        "A focus on holistic education",
    ];

    return (
        <section className="setApart">
            <div className="setApartImage"></div>

            <div className="setApartRight">
                <h3 className="saHeading">"What Sets Us Apart"</h3>
                <div className="sarList">
                    {listItems.map((item, index) => (
                        <div className="sarlContents" key={index}>
                            <img src={polygonIcon} alt="polygonIcon" />
                            <p className="bodyText">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default SetsApart