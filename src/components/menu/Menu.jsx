import "./menu.scss";

export default function menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                {/* create an event when we click the option menu to disappear */}
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#experiance">Experiance</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}


