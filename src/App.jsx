import { Link, Outlet } from "react-router-dom";
import "./app.css"


export default function App() {
    return (
    <>
    <div className="wrapper">
        <header className="navigationDuSite">
        <h1>Tropicana Fitness</h1>
        <nav>
            <ul>
            <Link to="/">Accueil</Link>
            {" - "}
            <Link to="/about">À propos</Link>
            {" - "}
            <Link to="/inventory">L'inventaire</Link>
            {" - "}
            <Link to="/contact">Contactez-moi</Link>
            </ul>
        </nav>
        </header>
        <main>
        <Outlet/>
        </main>
        <footer>
            <p>Corentin LEYS</p>
        </footer>
    </div>
    </>
    );
}