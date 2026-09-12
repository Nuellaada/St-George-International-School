import handbookIcon from '../../assets/About us/basil_book-mark-outline.svg'
import requirementIcon from '../../assets/About us/circum_view-list.svg'
import newsIcon from '../../assets/About us/hugeicons_news.svg'
import portalIcon from '../../assets/About us/streamline-ultimate_coding-apps-website-network-globe.svg'

function NewsEvents () {
    const events= [
        {
            day: "12",
            month: "AUG",
            title: "Mid-Term Break",
            date: "Aug 12 - Aug 15, 2025",
        },
        {
            day: "25",
            month: "AUG",
            title: "Parent-Teacher Meeting",
            date: "Aug 25, 2025",
        },
        {
            day: "5",
            month: "SEP",
            title: "New Term Begins",
            date: "Sep 5, 2025",
        },
    ];

    const resources = [
        { icon: handbookIcon, label: "School Handbook" },
        { icon: requirementIcon, label: "Class Requirement" },
        { icon: newsIcon, label: "News Letter" },
        { icon: portalIcon, label: "Parent Portal" },
    ];

    return (
        <section className="newsEvents">
            <div className="neLeft">
                <h5>Upcoming Events</h5>
                {events.map((event, index) => (
                    <div className="eventItem" key={index}>
                        <div className="eventDate">
                            <p className="eDayText">{event.day}</p>
                            <p className="eMonthText">{event.month}</p>
                        </div>

                        <div className="eventDetails">
                            <p className="eTitle">{event.title}</p>
                            <p className="eSubDate">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="neRight">
                <div className="parentResources">
                    <h3>Parent Resources</h3>
                </div>

                <div className="resourceIcons">
                    {resources.map((resource, index) => (
                        <div className="resourceItem" key={index}>
                            <img src={resource.icon} alt={resource.label} />
                            <p className="resourceText">{resource.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewsEvents;