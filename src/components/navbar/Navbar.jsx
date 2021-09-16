import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";


// "menuOpen" and "setMenuOpen" are the props seted in "App.jsx"
export default function navbar({ menuOpen, setMenuOpen }) {
    return (

        //insert the first prop (false)(concatenated)
        <div className={"navbar " + (menuOpen && "active")} id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">PauL.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>423242</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>email</span>
                    </div>
                </div>

                <div className="right">

                    {/* insert the secont prop (true)*/}
                    {/* create an event "onClick" and run a function with the prop */}
                    {/* we need to do the opossite of "menuOpen" prop*/}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
