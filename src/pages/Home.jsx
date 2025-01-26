import React from "react";
import raquette from "../assets/img/raquetteSquash.jpeg"


export default function Home(){
    return(
    <>
    <div className="homePager">
    <div className="descriptionDuSite">
        <h1>Bienvenue sur le site du Tropicana Fitness</h1>
        <p>Vous retrouverez ici toutes les informations concernant le Tropicana Fitness</p>
        <br />
        <p>Vous retrouverez des informations complémentaires dans l'onglet "A propos"</p>
        <br />
        <p>Vous avez également accès à l'inventaire de notre matériel de sport... et du bar (afin de ne pas mourir de soif)</p>
        <br />
        <p>N'hésitez pas à contacter le créateur de notre site, il est génial !</p>
        <br />
        <div className="banniereRaquette">
            <img src={raquette} alt="" className="raquette"/>
        </div>
    </div>
    </div>
    </>
    )
}