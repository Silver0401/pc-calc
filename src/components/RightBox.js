import React, { useState } from "react";

const RightBox = (props) => {

    const [InitState, setInitState] = useState(true)
    const [WhatBoxButton, setWhatBoxButton] = useState(false)
    const [WhyBoxButton, setWhyBoxButton] = useState(false)

    props.init(false)

    return(
        <section className="RightBox" style={props.state ? {visibility:"visible"}: {display:"none", visibility:"hidden"}}>

            <div className="QuestBox">
                <div className="What" onClick={() => setWhatBoxButton(prev => !prev)} style={WhatBoxButton ? {height: "100%"} : {height:"50%"}}>

                    <div className="TitleBox">
                        <h2 className="h2-1" style={WhatBoxButton ? {opacity: 0} : {opacity: 1}} >¿Qúe es el Cáncer de Próstata?</h2>

                        <svg style={WhatBoxButton ? {transform: "rotate(180deg)", transition:"transform 500ms"} : {transform: "rotate(0deg)", transition: "transform 500ms"} } width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M0 3l12 18 12-18h-24zm12 16.197l-10.132-15.197h20.263l-10.131 15.197"/></svg>
                    </div>

                    <p id="pnum1" style={WhatBoxButton ? {opacity: 1} : { opacity: 0}}>
                        El cáncer de próstata se origina
                         cuando las células de la próstata
                          comienzan a crecer fuera de control.
                           La próstata es una glándula que sólo 
                           tienen los hombres. Esta glándula produce
                            parte del líquido que conforma el semen.
                    </p>

                </div>
                <div className="Why" onClick={() => setWhyBoxButton(prev => !prev)} style={WhyBoxButton ? {height: "100%"} : {height:"50%"}}>

                    <div className="TitleBox">
                        <h2 className="h2-2" style={WhyBoxButton ? {opacity: 0} : {opacity: 1}} >¿Por qué es importante saber si yo tengo Cáncer de Próstata?</h2>

                        <svg style={WhyBoxButton ? {transform: "rotate(180deg)", transition:"transform 500ms"} : {transform: "rotate(0deg)", transition:"transform 500ms"} } width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M0 3l12 18 12-18h-24zm12 16.197l-10.132-15.197h20.263l-10.131 15.197"/></svg>
                    </div>


                    <p id="pnum2" style={WhyBoxButton ? { opacity: 1} : { opacity: 0}}>
                    
                    Algunos cánceres de próstata crecen y se propagan 
                    rápidamente, pero la mayoría crece lentamente. 
                    De hecho, los estudios realizados en algunas autopsias 
                    muestran que muchos hombres de edad avanzada 
                    (e incluso algunos hombres más jóvenes) que murieron 
                    por otras causas también tenían cáncer de próstata que 
                    nunca les afectó durante sus vidas. En muchos casos, 
                    ellos no sabían, y ni siquiera sus médicos, que tenían 
                    cáncer de próstata.
                    
                    </p>

                </div>
            </div>

            <h2 className="QuestTitle">Solo Introduzca los datos requeridos y reciba su resultado en menos de 5 minutos</h2>
            <a className="QuestButton" onClick={(e) => {e.preventDefault(); console.log("clicked"); props.init(InitState) ;setTimeout(() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}, 250)}} >
                <p>Empezar</p>
                <div className="liquid"></div>
            </a>
        </section>
    )
}

export default RightBox