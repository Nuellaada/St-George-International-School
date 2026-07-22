import arrowIcon from '../assets/arrow-up-right.svg';

function SchoolSections () {
    return (
        <section className="schoolSections">
            <h3 className="schoolSectionsHeading">From Early Learning to <span className="academic">Academic Excellence</span></h3>

            <div className="schoolSectionsContainer">

                <div className="schoolDivision division1">
                    <div className="textandbutton">
                        <p className="schoolSectionsText">Nursery School</p>
                        <button className="circularButton">
                            <img src={arrowIcon} alt="arrow-up" />
                        </button>
                    </div>
                </div>

                <div className="schoolDivision division2">
                    <div className="textandbutton">
                        <p className="schoolSectionsText">Primary School</p>
                        <button className="circularButton">
                            <img src={arrowIcon} alt="arrow-up" />
                        </button>
                    </div>
                </div>

                <div className="schoolDivision division3">
                    <div className="textandbutton">
                        <p className="schoolSectionsText">Secondary School</p>
                        <button className="circularButton">
                            <img src={arrowIcon} alt="arrow-up" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SchoolSections;