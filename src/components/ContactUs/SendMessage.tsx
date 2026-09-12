function SendMessage () {
    return (
        <section className="sendMessage">
            <div className="smLeft"></div>

            <div className="smRight">
                <h4>Send us a message</h4>
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
            </div>

        </section>
    );
}

export default SendMessage;