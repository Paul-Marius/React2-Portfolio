import "./home.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Designer', 'Creative'],
        });
    }, []);

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Paul B</h1>
                    <h3>Engineer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
