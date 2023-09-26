import React,{ useState, useLayoutEffect} from 'react'
import './UpdateName.css'

import { Link, useHistory } from "react-router-dom"

import errorInput from '../../assets/images/errorInput.JPG';

function UpdateName() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const [validName, setValidName] = useState(false);

    const validateName = (name) => {
        let errors = {}

        if(!name){
            errors.name = 'Saisissez votre nom';
        }
        
        return(errors);
    }
   
    const updatedName = (e) => {
       
    }
    
    useLayoutEffect(() => {
        if(Object.keys(errors).length === 0){
            setValidName(true);
        }
    }, [errors])

    return (
        <div className="updateName">
            <Link to="/">
                <img className="updateName__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="updateName__container">
                <h1>Définir un nom d'utilisateur</h1>
                <form action="">
                   
                    <h5>Votre nom</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    {errors.name && <div className="register__errorInput"><img src={errorInput} alt=""/><p>{errors.name}</p></div>}
                    <button className="updateName__signInButton" type="submit" onClick={updatedName}>Continuer</button>
                </form>

                <p>
                En créant votre compte, vous acceptez les<br/>
                <a>Conditions générales de vente</a> d’Amazon. Veuillez<br/>
                consulter notre <a>Notice Protection de vos informations<br/>
                personnelles</a>, notre <a>Notice Cookies</a> et notre <a>Notice<br/>
                Annonces publicitaires basées sur vos centres<br/>
                d’intérêt.</a>
                </p>    

            </div>

           
            <div className="updateName__footer">
                <div className="updateName__footer__container">
                </div>
                <div className="updateName__footer__link">
                    <a>Conditions d'utilisation</a>
                 
                    <a>Protection des vos informations personelles</a>
                
                    <a>Aide</a>
             
                    <a>Cookies</a>
               
                    <a>Annonces basées sur vos centres d'interet</a>
                </div>
                <div className="updateName__footer__copyright">
                    © 1996-2021, Amazon.com, Inc. ou ses filiales.
                </div>
            </div>
        </div>
    )
}

export default UpdateName;
