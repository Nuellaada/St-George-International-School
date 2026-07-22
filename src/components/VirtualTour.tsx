import tour1b from '../assets/tour1b.png';
import tour1c from '../assets/tour1c.png';
import tour1d from '../assets/tour1d.png';
import tour2c from '../assets/tour2c.png';

function VirtualTour() {
    return (
        <section className="virtualTour">
            <h2>Take a Virtual Tour</h2>

            <div className="virtualTourContainer">

                <div className="virtualTourRowOne">
                    <div className="imageCardOneCont"></div>
                    <div className="imageTripleCardCont">
                        <img src={tour1b} alt="Tour image 1" />
                        <img src={tour1c} alt="Tour image 2" />
                        <img src={tour1d} alt="Tour image 3" />
                    </div>
                </div>

                <div className="virtualTourRowTwo">
                    <div className="imageSingleCardCont">
                        <img src={tour1b} alt="Tour image" />
                    </div>
                    <div className="imageCardOneCont rowTwo"></div>
                    <div className="imageDoubleCardCont">
                        <img src={tour2c} alt="Tour image" />
                        <img src={tour1c} alt="Tour image" />
                    </div>
                </div>

                <div className="virtualTourRowThree">
                    <div className="imageDoubleCardCont">
                        <img src={tour1c} alt="Tour image" />
                        <img src={tour2c} alt="Tour image" />
                    </div>
                    <div className="imageCardOneCont rowThree"></div>
                    <div className="imageSingleCardCont">
                        <img src={tour1d} alt="Tour image" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default VirtualTour;