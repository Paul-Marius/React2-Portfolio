import { useState } from "react";
import "./contact.scss";

export default function Contact() {

    // message on submit button
    const [message, setMessage] = useState(false)

    // on click
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake-edge.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} action="">
                    <input placeholder="Email" type="text" />
                    <textarea placeholder="Message" name="" id="">
                    </textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>
            </div>

        </div>
    )
}
