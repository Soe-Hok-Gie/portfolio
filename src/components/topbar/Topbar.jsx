import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar active"> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Gembel.</a>
                    <div className="itemContaner">
                        <Person className="icon"/>
                        <span>083336874</span>
                    </div>
                    <div className="itemContaner">
                        <Mail className="icon "/>
                        <span>@gembelelite.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="humburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
