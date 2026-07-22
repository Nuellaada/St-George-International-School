//import Navbar from "../components/Navbar";
import AboutUsHero from "../components/AboutUs/AboutUsHero";
import SetUsApart from "../components/SetUsApart";
import VisionSection from "../components/VisionSection";
import MeetDirector from "../components/MeetDirector";
import LearnMore from "../components/LearnMore";
import ScheduleVisit from "../components/ScheduleVisit";
//import Footer from "../components/Footer";

function AboutUs () {
    console.log("AboutUs page loaded");
    return (
        <div>
            <AboutUsHero />
            <SetUsApart />
            <VisionSection />
            <MeetDirector />
            <LearnMore />
            <ScheduleVisit />
        </div>
    );
}

export default AboutUs;