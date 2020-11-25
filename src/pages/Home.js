import React, { useState, useEffect } from "react";
import anime from "animejs";

// Components
import LeftBox from "./../components/LeftBox"
import RightBox from "./../components/RightBox"
import MainBox from "./../components/MainBox"


const HomePage = () => {

    const [Visibility, setVisibility] = useState(true)
    const [ShowPage, setShowPage] = useState(false)
    const [OnChrome, setOnChrome] = useState(true)

    const InitializeForms = (coso) => {

        if (coso){

            const tl = anime.timeline({
                duration: 1000
            })

            tl.add({
                targets:".LeftBox",
                translateX: "-110%",
                duration: 1000,
                easing:"easeInOutQuad"
            })

            tl.add({
                targets:".RightBox",
                translateX: "110%",
                duration: 1000,
                easing:"easeInOutQuad"
            }, "-=1000")

            setTimeout(() => {
                // Visibility = false
                setVisibility(false)
            }, 1000)

            setTimeout(() => {
                window.alert("Aviso: Esta calculadora de riesgo para el cáncer de próstata no puede predecir al 100% la presencia o ausencia del cáncer de próstata. Está calculadora solo está diseñada para ayudar a calcular su riesgo, no para dar un diagnóstico definitivo.")
            }, 1200)

        } else {}
            
    }


    useEffect(() => {

        setOnChrome (!!(window).chrome && (!!(window).chrome.webstore || !!(window).chrome.runtime));
        
        if (OnChrome) {
            window.onload = () => {

                const Loader =  anime.timeline({
                    easing: "easeInOutSine",
                })
                
                Loader.add({
                    delay: 1000,
                    targets: ".MovingBox",
                    duration: 2200,
                    translateY: ["120%", "-120%"]
                })
                
                Loader.add({
                    targets: ".Loader",
                    duration: 750,
                    height: "0px"
                }, "-=1700")

                setTimeout(()=> {
                    setShowPage(true)
                },1100)
            }
        } else {

            setShowPage(true)
            console.log("not doing loading animation")
        }
    }, [OnChrome])
        
        return(
        <div className="HomePage" style={ShowPage ? {overflow: "scroll"} : {overflow: "hidden"} }>

            <MainBox/>

            <LeftBox state={Visibility}/>

            <RightBox state={Visibility} init={coso => InitializeForms(coso)}/>

            <section className="Loader" style={OnChrome ? {visibility:"visible"} : {visibility:"hidden",display:"none"}}>
                <div className="MainBox">

                    <div className="AnimBox">
                        <div className="Box1"></div>
                        <div className="Box2"></div>
                        <div className="Box3"></div>
                        <div className="Box4"></div>
                        <div className="Box5"></div>
                        <div className="Box6"></div>
                    </div>

                    <h1>Cargando...</h1>
                </div>

                <div className="MovingBox"></div>

            </section>

        </div>
    )
}

export default HomePage