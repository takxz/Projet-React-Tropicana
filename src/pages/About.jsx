import { Link, Outlet } from "react-router-dom";
import salleDeCours from "../assets/img/salleDeCours.jpg";
import salleSport from "../assets/img/salleSport.jpg";
import terrainDeSquash from "../assets/img/terrainDeSquash.jpg";
import bar from "../assets/img/bar.png"

export default function About(){
    return(
    <>
    <div className="AboutUs">
        <h1>A propos de nous : </h1>
        <p>Bonjour, vous vous trouvez sur le site de la salle du Tropicana Fitness</p>
        <br />
        <p>Retrouvez-ici les informations nous concernant !</p>
        <br />
        <p>le club est composé de 3 terrains de Squash, d'un terrain de Badminton d'une salle de cours collectifs et d'une salle de musculation avec de nombreuses machines et poids.</p>
        <br />
        <p>Vous trouverez ici l'inventaire de notre salle de sport, vous pourrez donc savoir quels équipements sont disponibles </p>
        <p>Vous trouverez l'inventaire dans l'onglet "Inventaire", ou juste <Link to="/inventory">ici</Link>.</p>
        <br />
        <p>Quelques photos, pour votre plus grand plaisir !</p>
        <br />
        <div className="imageTropicana">
            <p>Nos salles de sport !</p>
            <div className="imageDeLaSalle">
                <br />
                <img src={salleDeCours} alt="Photo d'une salle de cours de sport" className="salleDeCours"/>
                <img src={salleSport} alt="Photo d'une salle de sport avec des machines" className="salleDeSport"/>
                <img src={terrainDeSquash} alt="Terrain de squash" className="terrainDeSquash" />
            </div>
            <p>Et évidemment, après l'effort, le réconfort !</p>
            <div className="imageDuBar">
                <img src={bar} alt="" className="bar"/>
            </div>
        </div>
        <div className="googlemaps">
            <h2>Comment nous retrouver ?</h2>
            <br />
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.4670969463864!2d2.8815453772429893!3d50.711272971643126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd6c145f3b271%3A0x5c0981748328dbe3!2sTropicana%20Fitness!5e0!3m2!1sfr!2sfr!4v1733249400755!5m2!1sfr!2sfr" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    <Outlet/>
    </>
    );
}
