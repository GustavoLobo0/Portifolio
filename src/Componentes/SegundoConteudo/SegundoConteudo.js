import "./style.css"
import React from "../images/ReactLogo.webp"
import JavaScript from "../images/JsLogo.webp"
import TypeScript from "../images/tsLogo.png"

export function SegundoConteudo() {
    
    

    return (
        <>
            <div className="pai"id="ParteTecnologias">
                <h3 className="tituloh3"> Tecnologias Aprendidas</h3>
                <div className="Tecnologias">
                    <button  className="react"><img src={React} className="ReactLogo" /><p>React</p></button>
                    <button className="javaScript"><img src={JavaScript} className="JsLogo" /><p>JavaScript</p></button>
                    <button className="typeScript"><img src={TypeScript} className="ts" /> <p>TypeScript</p></button>

                    <div className="reactQuadrado"></div>
                    <div className="javaScriptQuadrado"></div>
                    <div className="typeScriptQuadrado"></div>
                </div>
                <p className="subtitulo">Também uso Bootstrap, Taiilwind,<br /> 
                Html, Css, Git e GitHub</p>
            </div>
        </>
    );
}