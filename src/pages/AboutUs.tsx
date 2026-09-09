//import Navbar from "../components/Navbar";
import AboutUsHero from "../components/AboutUs/AboutUsHero";
import SetsApart from "../components/AboutUs/SetsApart";
import Statements from "../components/AboutUs/Statements";
import OurDirector from "../components/AboutUs/OurDirector";
import WatchWord from "../components/AboutUs/WatchWord";
import CTA from "../components/AboutUs/CTA";
//import Footer from "../components/Footer";

function AboutUs () {
    console.log("AboutUs page loaded");
    return (
        <div>
            <AboutUsHero />
            <SetsApart />
            <Statements />
            <OurDirector />
            <WatchWord />
            <CTA />
        </div>
    );
}

export default AboutUs;