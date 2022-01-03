import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const texRef = useRef();

    useEffect(()=>{
        init(texRef.current, { showCursor: true, backDelay: 1500,
            backSpeed: 50, strings: ['Olá, Bem-vindo ao teste', 'Fique a vontade!', '👋'] })
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/" alt="" />
                    <h1>img</h1>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2><span ref={texRef}></span></h2>
                    <h1>teste maior</h1>
                    <h3>teste menor </h3>
                </div>
                <a href="#portofolio">
                    <img src="assets/" alt="" />
                </a>
            </div>
        </div>
    )
}