import calendarIcon from '../assets/calendar-svg.svg';
import mailIcon from '../assets/mail-svg.svg';
import bookIcon from '../assets/book-svg.svg';
import arrowIcon from '../assets/arrow-up-right.svg';

function Others () {
    return (
        <section className="others">

            <div className="othersCard">
                <img src={calendarIcon} alt="calendar" />
                <div className="othersCardContainer">
                    <div className="headingandbutton">
                        <h5>School calendar</h5>
                        <button className="circularButtonSmall">
                            <img src={arrowIcon} alt="arrow-up" />
                        </button>
                    </div>
                    <p className="otherCardText">
                        Easily keep track of upcoming events, important dates, and school activities.
                    </p>
                </div>
            </div>

            <div className="othersCardDiff">
                <img src={mailIcon} alt="email icon" />
                <div className="othersCardContainer">
                    <div className="headingandbutton">
                        <h5 className="blackh5">Newsletter</h5>
                        <button className="circularButtonSmall">
                            <img src={arrowIcon} alt="arrow-up" />
                        </button>
                    </div>
                    <p className="otherCardText blackText">
                        Get the latest updates, news, and insights delivered straight to your inbox.
                    </p>
                </div>
            </div>

            <div className="othersCardBook">
                <img src={bookIcon} alt="book icon" />
                <div className="othersCardContainer">
                    <div className="headingandbutton">
                        <h5>Parent resources</h5>
                        <button className="circularButtonSmall">
                            <img src={arrowIcon} alt="arrow-up" />
                        </button>
                    </div>
                    <p className="otherCardText">Access important information and stay connected with your child's education.</p>
                </div>
            </div>
        </section>
    );
}

export default Others;