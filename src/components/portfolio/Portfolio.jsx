import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

export default function Portfolio() {

     const list =[
          {
               id:"featured",
               title:"Featured",
          },
          {
               id:"web",
               title:"Web App"
          },
          {
               id:"mobile",
               title:"Mobile App",
          },
          {
               id:"writer",
               title:"Writer Poem"
          }
     ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map((item) =>(
                    <PortfolioList title={item.title}/>

               ))}
            </ul>
            <div className="container">
            <div className="item">
                     <img src="https://image.freepik.com/free-vector/coding-programmer-workspace-with-cactus-coffee-book-vector-clip-art-illustration_138676-87.jpg" alt=""/>
                     
                     <h3>Banking app</h3>
                </div>
                <div className="item">
                     <img src="https://image.freepik.com/free-vector/coding-programmer-workspace-with-cactus-coffee-book-vector-clip-art-illustration_138676-87.jpg" alt=""/>
                     
                     <h3>Banking app</h3>
                </div>
                <div className="item">
                     <img src="https://image.freepik.com/free-vector/coding-programmer-workspace-with-cactus-coffee-book-vector-clip-art-illustration_138676-87.jpg" alt=""/>
                     
                     <h3>Banking app</h3>
                </div>
                <div className="item">
                     <img src="https://image.freepik.com/free-vector/coding-programmer-workspace-with-cactus-coffee-book-vector-clip-art-illustration_138676-87.jpg" alt=""/>
                     
                     <h3>Banking app</h3>
                </div>
            
                <div className="item">
                     <img src="https://image.freepik.com/free-vector/coding-programmer-workspace-with-cactus-coffee-book-vector-clip-art-illustration_138676-87.jpg" alt=""/>
                     
                     <h3>Banking app</h3>
                </div>
                <div className="item">
                     <img src="https://image.freepik.com/free-vector/coding-programmer-workspace-with-cactus-coffee-book-vector-clip-art-illustration_138676-87.jpg" alt=""/>
                     
                     <h3>Banking app</h3>
                </div>
            </div>
        </div>
    )
}
 