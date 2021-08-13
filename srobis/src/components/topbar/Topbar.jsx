import "./topbar.scss"
import {Phone, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }){
    return (
        <div className={"topbar "+(menuOpen && "active")}>
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">Jorsdi Obis Farre</a>
                    <div className="itemContainer">
                        <Mail clasName="icon" />
                        <span>jordi@srobis.com</span>
                    </div>
                    <div className="itemContainer">
                        <Phone clasName="icon" />
                        <span>+34 619 07 08 25</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span clasName="line1"></span>
                        <span clasName="line2"></span>
                        <span clasName="line3"></span>
                    </div>
                </div>

            </div>
           
        </div>
    )
}