import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect,useState} from "react";
import {
     featuredPortfolio,
     webPortfolio,
     mobilePortfolio,
     writerPortfolio
} from "../../data.js";

export default function Portfolio() {

     const [selected, setselected] = useState("featured");
     const [data, setData] = useState([]);
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
               title:"Writer "
          }
     ];

     useEffect (()=>{

          switch (selected){
               case "featured":
                    setData(featuredPortfolio);
                    break;
               case "web":
                    setData(webPortfolio);
                    break;
               case "mobile":
                    setData(mobilePortfolio);
                    break;
               case "writer":
                    setData(writerPortfolio);
                    break;
               default:
                    setData(featuredPortfolio);
          }

     },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map((item) =>  ( 
                    <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setselected={setselected}
                    id={item.id}
                    />
               ))}
            </ul>
            <div className="container">
               {data.map((d)=> (
              
            <div className="item">
                     <img src={d.img}
                     alt=""/>
                     
                     <h3>{d.title}</h3>
                    </div> 
                ))}
               </div>
          </div>
    );
}
 