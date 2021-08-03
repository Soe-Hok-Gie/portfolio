import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testemonials from "./components/testemonials/Testemonials"
import Contact from "./components/contact/Contact"
import "./app.scss"

//sections gak terbaca

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        hahaha
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
