import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Experiance from "./components/experiance/Experiance";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";

import { useState } from "react";

function App() {

  //create a state for dynamic hamburger menu
  //using the state hook
  //menuOpen and setMenuOpen are props
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">

      {/* you can use different names (menuOpen={menuOpen} could be (differentName={menuOpen})) */}
      {/* you are going to use the names that you set it, INSIDE the specific page (this case Navbar) */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* you are going to use the names that you set it, INSIDE the specific page (this case Menu) */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">
        <Home />
        <Portfolio />
        <Work />
        <Experiance />
        <Contact />
      </div>
    </div>
  );
}

export default App;
