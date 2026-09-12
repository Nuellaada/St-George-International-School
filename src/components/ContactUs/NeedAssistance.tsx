import phoneIcon from '../../assets/About us/phone-icon.svg'
import emailIcon from '../../assets/About us/email-icon.svg'
import clockIcon from '../../assets/About us/workingHours-icon.svg'
import addressIcon from '../../assets/About us/address-icon.svg'

function NeedAssistance () {

    const contactInfo = [
        {
            icon: phoneIcon,
            label: "Phone Numbers:",
            value: "+234 402 204 042, +234 806 608 068",
        },
        {
            icon: emailIcon,
            label: "Email Address:",
            value: "StGeorge@school.com",
        },
        {
            icon: clockIcon,
            label: "Working Hours:",
            value: "Monday - Friday: 8:00AM - 4:00PM",
        },
    ];

    return (
        <section className="needAssistance">
            <div className="headingCont">
                <h3>Need Assistance?</h3>
                <p className="naText">Have questions about admissions, events, or school activities? We're happy to help. Reach out to us through any of the contact options below</p>
            </div>

            <div className="bodyCont">
                <div className="addressCont">
                    <img src={addressIcon} alt="address Icon" />
                    <h5>Address</h5>
                    <p className="cardText">NO. 1, College road, behind First Bank Ibeku-Ovoko, Igboeze south local government area. Enugu state</p>
                </div>

                <div className="contactInfo">
                    {contactInfo.map((item, index) => (
                        <div className="contactItem" key={index}>
                            <img src={item.icon} alt={item.label} />
                            <p className="contactLabel">{item.label}</p>
                            <p className="contactValue">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default NeedAssistance;