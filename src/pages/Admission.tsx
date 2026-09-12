import AdmissionHero from "../components/Admissions/AdmissionHero";
import GradeLevels from "../components/Admissions/GradeLevels";
import CTAadmission from "../components/Admissions/CTAadmission";
import TakeTour from "../components/Admissions/TakeTour";
import NewsEvents from "../components/Admissions/NewsEvents";

function Admission () {
    return (
        <div>
            <AdmissionHero />
            <GradeLevels />
            <CTAadmission />
            <TakeTour />
            <NewsEvents />
        </div>
    );
}

export default Admission;