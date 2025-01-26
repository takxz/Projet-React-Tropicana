import React from "react"
import { Link } from "react-router-dom"
import Cat from "../assets/img/notfound.png"

export default function NotFound(){

return(
    <>
    <div className="notFound">
        <img src={Cat} alt="" />
        <h1>Error 404 : Something went wrong...</h1>
        <p><Link to="/">Revenir à l'accueil</Link></p>
    </div>
    </>
)
}
