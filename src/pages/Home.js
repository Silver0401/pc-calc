import React, { useState } from "react";
import anime from "animejs";

// Components
import LeftBox from "./../components/LeftBox"
import RightBox from "./../components/RightBox"
import MainBox from "./../components/MainBox"


const HomePage = () => {

    const [Visibility, setVisibility] = useState(true)
    // let Visibility = true

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

            // setTimeout(() => {
            //     window.alert("Aviso: Esta calculadora se basa en La Fundación Investigativa del Cáncer de Próstata, y no es 100% exacta.")
            // }, 1200)

        } else {}
            
    }

    return(
        <div className="HomePage">

            <MainBox/>

            <LeftBox state={Visibility}/>

            <RightBox state={Visibility} init={coso => InitializeForms(coso)}/>

        </div>
    )
}

export default HomePage