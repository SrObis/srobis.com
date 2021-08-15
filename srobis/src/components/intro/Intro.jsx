import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro(){
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Programador web"],
        });
    },[]);
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
                    <h3>Soy <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                   <img src="assets/down.png" alt=""/>
                </a>
            </div> 

        </div>
    )
}