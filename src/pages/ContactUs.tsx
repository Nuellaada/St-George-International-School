import ContactUsHero from "../components/ContactUs/ContactUsHero";
import NeedAssistance from "../components/ContactUs/NeedAssistance";
import SendMessage from "../components/ContactUs/SendMessage";
import CTA from "../components/AboutUs/CTA";

function ContactUs () {
    return (
        <div>
            <ContactUsHero />
            <NeedAssistance />
            <SendMessage />
            <CTA />
        </div>
    );
}

export default ContactUs