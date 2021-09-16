import "./experiance.scss"

export default function experiance() {

    const edummyData = [
        {
            id: 1,
            name: "Jhon",
            title: "web Designer",
            img: "https://m.media-amazon.com/images/I/81sQxjJBn1L._AC_SX679_.jpg",
            icon: "./assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 2,
            name: "Marry",
            title: "Mobile developer",
            img: "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
            icon: "./assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet.",
            featured: true,
        },
        {
            id: 3,
            name: "Cris",
            title: "Architect",
            img: "https://www.counterpointresearch.com/wp-content/uploads/2018/03/Nokia-Marketshare.png",
            icon: "./assets/writing.png",
            desc: "Lorem ipsum dolor sit amet.",
        },
    ]

    return (
        <div className="experiance" id="experiance">

            <h1>Experiance</h1>
            <div className="container">

                {edummyData.map((d) => (

                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img className="left" src="assets/curved-right-arrow.png" alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
