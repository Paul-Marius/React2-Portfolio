import { useState } from "react"
import "./work.scss"

export default function Work() {

    // create a hook for slider
    const [currentSlide, setCurentSlide] = useState(0);

    const wdummyData = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "web Design",
            desc: "Lorem ipsum dolor sit amet.",
            img: "https://m.media-amazon.com/images/I/81sQxjJBn1L._AC_SX679_.jpg"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "mobile aplication",
            desc: "Lorem ipsum dolor sit amet.",
            img: "https://i.pcmag.com/imagery/reviews/05OE4snihdn0WXy0Hx4YgV5-1.1619713542.fit_scale.size_760x427.jpg"
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "top commerce",
            desc: "Lorem ipsum dolor sit amet.",
            img: "https://www.counterpointresearch.com/wp-content/uploads/2018/03/Nokia-Marketshare.png"
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurentSlide(currentSlide < wdummyData.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="work" id="work">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {wdummyData.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <img src="assets/right-arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/right-arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />

        </div >
    )
}
