import React,{ useState } from 'react'
import './ForgotPassword.css'

import { Link, useHistory } from "react-router-dom"


function ForgotPassword() {
    const history = useHistory();
    const [email, setEmail] = useState('');

    const changePassword = (e) => {
        
    }
    return (
        <div className="forgotPassword">
            <Link to="/">
                <img className="forgotPassword__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="forgotPassword__container">
                <h1>Aide avec le mot de<br/>passe</h1>
                <p>
                    Saisissez l'adresse e-mail ou le numéro de<br/> 
                    téléphone portable associé a votre compte<br/>
                    Amazon.
                </p>
                <form action="">
                    <h5>Adresse e-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <button className="forgotPassword__signInButton" type="submit" onClick={changePassword}>Continuer</button>
                </form>
            </div>

            <div className="forgotPassword__paragraph">
                <span>
                    Avez-vous changé d'adresse e-mail ou de<br/>
                    numéro de téléphone portable ?
                </span>
                <p>
                    Si vous n'utilisez plus l'adresse e-mail associée à votre<br/>
                    compte Amazon, vous pouvez contacter le Service clients<br/>
                    pour vous aider a restaurer l'accès à votre compte
                </p>
                
            </div>

            <div className="forgotPassword__footer">
                <div className="forgotPassword__footer__container">
                </div>
                <div className="forgotPassword__footer__link">
                    <a>Conditions d'utilisation</a>
                 
                    <a>Protection des vos informations personelles</a>
                
                    <a>Aide</a>
             
                    <a>Cookies</a>
               
                    <a>Annonces basées sur vos centres d'interet</a>
                </div>
                <div className="forgotPassword__footer__copyright">
                    © 1996-2021, Amazon.com, Inc. ou ses filiales.
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword