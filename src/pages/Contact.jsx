import React from "react";
import imagePdp from "../assets/img/imagepdp.jpeg"
import linkedIn from "../assets/img/linkedIn.png"
import github from "../assets/img/github.png"

export default function Contact(){

    return(
        <>
            <div className="contactme">
                <div>
                <h1>A propos de l'auteur :</h1>
                    <div className="photoAndLinkedIn">                    
                    <br />
                        <div className="autor">
                            <img src={imagePdp} alt="" className="imageProfil"/>
                            <p>Corentin LEYS</p>
                        </div>
                        <br /><br />
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/corentinleys/" target="_blank">
                                <img src={linkedIn} alt="" className="linkedInImage" />
                            </a>
                            <p>Retrouvez-moi sur LinkedIn !</p> 
                        </div>
                    </div>
                    <div className="github">
                        <p>Retrouvez-moi également sur GitHub : </p>
                        <a href="https://github.com/takxz" target="_blank">
                        <img src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}