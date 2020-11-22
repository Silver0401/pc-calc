import React from "react";

const MainBox = () => {
    return(
        <section className="MainBox">
            <h1>Cuestionario</h1>

            <form id="QuestInit">
                <div className="First">

                    <label htmlFor="Family">¿Tienes familiares cercanos (hermano, padre o tíos) que tuvieron o tienen cáncer de próstata?</label>
                    <select name="Family">
                        <option value="yes" >Si</option>
                        <option value= "no" >No</option>
                    </select>

                    <label htmlFor="age">¿Cual es tu edad?</label>
                    <select name="age">
                        <option value="AgeRage1">45 - 54 años</option>
                        <option value="AgeRage2">55 - 59 años</option>
                        <option value="AgeRage3">60 - 64 años</option>
                        <option value="AgeRage4">65 - 70 años</option>
                        <option value="AgeRage5">70 - 74 años</option>
                    </select>
                    
                    <label htmlFor="UrinteQ1">¿Qué tan frecuentemente ha tenido la sensación de que su vejiga no se vacía por completo después de orinar?</label>
                    <select name="UrineQ1">
                        <option value="nie">Nunca</option>
                        <option value="1-5">1 de cada 5 veces</option>
                        <option value="1-3">1 de cada 3 veces</option>
                        <option value="1-2">1 de cada 2 veces</option>
                        <option value="2-3">2 de cada 3 veces</option>
                        <option value="fast immer">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ2">¿Qué tan frecuentemente ha tenido que ir a orinar en menos de dos horas después de su última vez?</label>
                    <select name="UrineQ2">
                        <option value="nie">Nunca</option>
                        <option value="1-5">1 de cada 5 veces</option>
                        <option value="1-3">1 de cada 3 veces</option>
                        <option value="1-2">1 de cada 2 veces</option>
                        <option value="2-3">2 de cada 3 veces</option>
                        <option value="fast immer">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ3">¿Qué tan frecuentemente ha notado que el flujo de orina se detiene y vuelve regresar varias veces mientras orina?</label>
                    <select name="UrineQ3">
                        <option value="nie">Nunca</option>
                        <option value="1-5">1 de cada 5 veces</option>
                        <option value="1-3">1 de cada 3 veces</option>
                        <option value="1-2">1 de cada 2 veces</option>
                        <option value="2-3">2 de cada 3 veces</option>
                        <option value="fast immer">Casi siempre</option>
                    </select>

                </div>
                
                <div className="Second">

                    <label htmlFor="UrinteQ4">¿Qué tan frecuentemente ha sentido que se le dificulta aguantar las ganas de orinar?</label>
                    <select name="UrineQ4">
                        <option value="nie">Nunca</option>
                        <option value="1-5">1 de cada 5 veces</option>
                        <option value="1-3">1 de cada 3 veces</option>
                        <option value="1-2">1 de cada 2 veces</option>
                        <option value="2-3">2 de cada 3 veces</option>
                        <option value="fast immer">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ5">¿Qué tan frecuentemente ha notado una reducción en la fuerza de su flujo de orina?</label>
                    <select name="UrineQ5">
                        <option value="nie">Nunca</option>
                        <option value="1-5">1 de cada 5 veces</option>
                        <option value="1-3">1 de cada 3 veces</option>
                        <option value="1-2">1 de cada 2 veces</option>
                        <option value="2-3">2 de cada 3 veces</option>
                        <option value="fast immer">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ6">¿Qué tan frecuentemente ha tenido que empujar o usar más presión para comenzar a orinar?</label>
                    <select name="UrineQ6">
                        <option value="nie">Nunca</option>
                        <option value="1-5">1 de cada 5 veces</option>
                        <option value="1-3">1 de cada 3 veces</option>
                        <option value="1-2">1 de cada 2 veces</option>
                        <option value="2-3">2 de cada 3 veces</option>
                        <option value="fast immer">Casi siempre</option>
                    </select>

                    <label htmlFor="UrinteQ7">Desde el momento en que se acuesta para dormir hasta el momento en que se levanta en las mañanas, ¿cuántas veces se tiene que levantar para ir a orinar?</label>
                    <select name="UrineQ7">
                        <option value="nie">Nunca</option>
                        <option value="1 time">Una vez</option>
                        <option value="2 times">Dos veces</option>
                        <option value="3 times">Tres veces</option>
                        <option value="4 times">Cuatro veces</option>
                        <option value="5 or More">Cinco o más veces</option>
                    </select>
 
                </div>
            </form>
        </section>
    )
}

export default MainBox