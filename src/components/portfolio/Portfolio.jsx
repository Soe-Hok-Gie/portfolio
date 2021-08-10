import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Web Apps</li>
                <li>Mobile Apps</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                     <img src="https://images.pexels.com/photos/7605981/pexels-photo-7605981.jpeg?cs=srgb&dl=pexels-mart-production-7605981.jpg&fm=jpg" alt=""/>
                     
                     <h3>Branding app</h3>
                </div>
            </div>
        </div>
    )
}
 