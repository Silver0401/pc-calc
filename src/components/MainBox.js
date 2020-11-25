import React, { useRef, useState } from "react";
import anime from "animejs";

const MainBox = () => {

    const [ResultsH2, setResultsH2] = useState("An error ocurred :(")
    const [ResultsP, setResultsP] = useState("An error ocurred :(")

    const Q1 = useRef()
    const Q2 = useRef()
    const Q3 = useRef()
    const Q4 = useRef()
    const Q5 = useRef()
    const Q6 = useRef()
    const Q7 = useRef()

    const AnalizeResults = (e) => {
        e.preventDefault()
        let total = parseInt(Q1.current.value) + parseInt(Q2.current.value) + parseInt(Q3.current.value) + parseInt(Q4.current.value) + parseInt(Q5.current.value) + parseInt(Q6.current.value) + parseInt(Q7.current.value) 
        
        const tl = anime.timeline({})

        tl.add({
            targets:"#Result",
            duration: 800,
            translateX: "101%",
            easing:"easeInOutQuad"
        })

        tl.add({
            targets:["#QuestInit", "#MainBoxTitle"] ,
            duration: 500,
            filter:"blur(10px)"
        },"+=50")


        if (total <= 7){
            setResultsH2("Tus sintomas son muy leves")
            setResultsP("No es probable que tengas padezcas cáncer de próstata y no es necesario realizarte un examen médico.")
        } else if (total >= 20) {
            setResultsH2("Tus síntomas son moderados")
            setResultsP("Hay una ligera probabilidad de que padezcas cáncer de próstat y te recomendamos realizarte un exámen médico pronto.")
        } else {
            setResultsH2("Tus síntomas son severos")
            setResultsP("Existe una alta posibilidad de que padezcas cáncer de próstata, es neceario realizarte un exámen médico inmediatamente.")
        }
    }

    return(
        <section className="MainBox">
            <h1 id="MainBoxTitle">Cuestionario</h1>

            <form id="QuestInit">
                <div className="First">
                    
                    <label htmlFor="UrinteQ1">¿Qué tan frecuentemente ha tenido la sensación de que su vejiga no se vacía por completo después de orinar?</label>
                    <select ref={Q1} name="UrineQ1">
                        <option value="0">Nunca</option>
                        <option value="1">1 de cada 5 veces</option>
                        <option value="2">1 de cada 3 veces</option>
                        <option value="3">1 de cada 2 veces</option>
                        <option value="4">2 de cada 3 veces</option>
                        <option value="5">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ2">¿Qué tan frecuentemente ha tenido que ir a orinar en menos de dos horas después de su última vez?</label>
                    <select ref={Q2} name="UrineQ2">
                        <option value="0">Nunca</option>
                        <option value="1">1 de cada 5 veces</option>
                        <option value="2">1 de cada 3 veces</option>
                        <option value="3">1 de cada 2 veces</option>
                        <option value="4">2 de cada 3 veces</option>
                        <option value="5">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ3">¿Qué tan frecuentemente ha notado que el flujo de orina se detiene y vuelve regresar varias veces mientras orina?</label>
                    <select ref={Q3} name="UrineQ3">
                        <option value="0">Nunca</option>
                        <option value="1">1 de cada 5 veces</option>
                        <option value="2">1 de cada 3 veces</option>
                        <option value="3">1 de cada 2 veces</option>
                        <option value="4">2 de cada 3 veces</option>
                        <option value="5">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ4">¿Qué tan frecuentemente ha sentido que se le dificulta aguantar las ganas de orinar?</label>
                    <select ref={Q4} name="UrineQ4">
                        <option value="0">Nunca</option>
                        <option value="1">1 de cada 5 veces</option>
                        <option value="2">1 de cada 3 veces</option>
                        <option value="3">1 de cada 2 veces</option>
                        <option value="4">2 de cada 3 veces</option>
                        <option value="5">Casi siempre</option>
                    </select>

                </div>
                
                <div className="Second">

                    <label htmlFor="UrinteQ5">¿Qué tan frecuentemente ha notado una reducción en la fuerza de su flujo de orina?</label>
                    <select ref={Q5} name="UrineQ5">
                        <option value="0">Nunca</option>
                        <option value="1">1 de cada 5 veces</option>
                        <option value="2">1 de cada 3 veces</option>
                        <option value="3">1 de cada 2 veces</option>
                        <option value="4">2 de cada 3 veces</option>
                        <option value="5">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ6">¿Qué tan frecuentemente ha tenido que empujar o usar más presión para comenzar a orinar?</label>
                    <select ref={Q6} name="UrineQ6">
                        <option value="0">Nunca</option>
                        <option value="1">1 de cada 5 veces</option>
                        <option value="2">1 de cada 3 veces</option>
                        <option value="3">1 de cada 2 veces</option>
                        <option value="4">2 de cada 3 veces</option>
                        <option value="5">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ7">Desde el momento en que se acuesta para dormir hasta el momento en que se levanta en las mañanas, ¿cuántas veces se tiene que levantar para ir a orinar?</label>
                    <select ref={Q7} name="UrineQ7">
                        <option value="0">Nunca</option>
                        <option value="1 time">Una vez</option>
                        <option value="2 times">Dos veces</option>
                        <option value="3 times">Tres veces</option>
                        <option value="4 times">Cuatro veces</option>
                        <option value="5 or More">Cinco o más veces</option>
                    </select>

                    <button className="SubmitButton" onClick={AnalizeResults}>
                        <p>Enviar</p>
                        <div className="liquid"></div>
                    </button>
 
                </div>
            </form>
        
            <div id="Result">

                <div className="HomeButton" onClick={() => window.location = "/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z"/></svg>
                </div>

                <div className="ResultsBox">
                    <h4>Resultados</h4>
                    <h2>{ResultsH2}</h2>
                    <p>{ResultsP}</p>
                </div>
            </div>
        
        </section>
    )
}

export default MainBox