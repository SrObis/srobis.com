import "./topbar.scss"
import {Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }){
    return (
        <div className={"topbar "+(menuOpen && "active")}>
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">Jordi Obis Farre</a>
                
                    <div clasName="itemContainer">
                        <Mail clasName="icon" />
                        <span>jordi@srobis.com</span>
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