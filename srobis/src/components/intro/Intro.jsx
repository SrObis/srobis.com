import "./intro.scss"

export default function Intro(){
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagContainer">
                    <img src="assets/" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Mi nombre es</h2>
                    <h1>Jordi Obis Farre</h1>
                    <h3>Soy<span></span></h3>
                </div>
                <a href="#portfolio">
                   <img src="assets/down.png" alt=""/>
                </a>
            </div> 

        </div>
    )
}