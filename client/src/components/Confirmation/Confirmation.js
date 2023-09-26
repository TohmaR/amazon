import React from 'react'
import { Link } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
    return (
        <div className="confirmation">
            <Link to="/">
                <img className="confirmation__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            
            <div className="confirmation__content">
                <h1>Un email de réinitialisation vient d'etre envoyé sur votre boite mail !</h1>
                <Link to="/" className="text-link"><a>Retourner a la page d'accueil</a></Link>
            </div>
           
            <div className="confirmation__footer">
                <div className="confirmation__footer__container">
                </div>
                <div className="confirmation__footer__link">
                    <a>Conditions d'utilisation</a>
                 
                    <a>Protection des vos informations personelles</a>
                
                    <a>Aide</a>
             
                    <a>Cookies</a>
               
                    <a>Annonces basées sur vos centres d'interet</a>
                </div>
                <div className="confirmation__footer__copyright">
                    © 1996-2021, Amazon.com, Inc. ou ses filiales.
                </div>
            </div>
        </div>
    )
}

export default Confirmation
