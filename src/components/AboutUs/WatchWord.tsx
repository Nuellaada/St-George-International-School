import WatchWordImage from '../../assets/About us/watchWordImg.png'

function WatchWord () {
    return (
        <section className="watchWord">
            <img src={WatchWordImage} alt="watchwordimg" />
            <div className="wwTextContainer">
                <h3>St. George International School, Excellence is our Watch Word!</h3>
                <p className="wwText">We believe that every child has the potential to excel. Founded in 2015, our school has been a nurturing ground for young minds, fostering a love for learning and a spirit of curiosity. Since our establishment in 2015, we have been dedicated to nurturing academic excellence and character development. Located in the heart of Nsukka, our school serves as a second home where students feel inspired to explore, learn, and grow.</p>
            </div>
        </section>
    );
}

export default WatchWord