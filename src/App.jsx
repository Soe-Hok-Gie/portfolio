import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testemonials from "./components/testemonials/Testemonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import {useState} from "react"
import Menu from "./components/menu/Menu"

//sections gak terbaca

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu/>
      <div className="sections">
        
        <Intro/> 
        <Portfolio/> 
        <Works/> 
        <Testemonials/> 
        <Contact/>
    </div>
    </div>
  )
}

export default App;
