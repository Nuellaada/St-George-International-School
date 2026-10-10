import { useState } from "react";

function SendMessage () {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

    await fetch("https://formspree.io/f/mbgdyydr", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
    };

    return (
        <section className="sendMessage">
            <div className="smLeft"></div>

            <div className="smRight">
                <h4>Send us a message</h4>

                {submitted ? (
                    <p className="successMessage">Message sent! We'll get back to you soon.</p>
                ) : (
                    <form action="submit" className="contactForm">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="formInput" 
                    />

                    <input 
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="formInput"
                    />

                    <textarea 
                        name="message"
                        placeholder="Your message"
                        className="formTextArea"
                    ></textarea>

                    <button type="submit" className="primaryButton">Send</button>
                </form>
                )}
            </div>
        </section>
    );
}

export default SendMessage;