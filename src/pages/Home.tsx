//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import SchoolSections from "../components/SchoolSections";
import WhyChooseUs from "../components/WhyChooseUs";
import VirtualTour from "../components/VirtualTour";
import ScheduleVisit from "../components/ScheduleVisit";
import Others from "../components/Others";
//import Footer from "../components/Footer";

function Home () {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <LearnMore />
            <SchoolSections />
            <WhyChooseUs />
            <VirtualTour />
            <ScheduleVisit />
            <Others />
            {/* <Footer /> */}
        </div> 
    );
}

export default Home;