import React, {useState, useEffect} from 'react'
import './Register.css'
import { useRegister } from '../../hooks/useRegister';
import infoPassword from '../../assets/images/infoPassword.JPG';
import errorInput from '../../assets/images/errorInput.JPG';
import { Link } from 'react-router-dom'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const { register, error, isLoading} = useRegister();
 
    const handleOPasswordVisibility = () =>{
        setPasswordVisibility(!passwordVisibility);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await register(email, password, firstName, lastName)
    }

    
    return (
        <div className="register">
            <Link to="/">
                <img className="register__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="register__container">
                <h1>Créer un compte</h1>
                <form action="">
                    <h5>Votre prénom</h5>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <h5>Votre nom</h5>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <h5>Votre email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Mot de passe</h5>
                    <div className="login__mdpInput__container">
                        <input type={passwordVisibility ? "text" : "password"} placeholder="Au moins 6 caractères" value={password} onChange={e => setPassword(e.target.value)} />
                        {passwordVisibility ? <VisibilityOffOutlinedIcon className="login__mdpIcon" fontSize="small" onClick={handleOPasswordVisibility}/> :<VisibilityOutlinedIcon className="login__mdpIcon" fontSize="small" onClick={handleOPasswordVisibility}/>}
                        
                    </div>
                    { error && <div className="register__errorInput"><img src={errorInput} alt=""/><p>{error}</p></div>}
                    <button className="register__signInButton" type="submit" disabled={isLoading} onClick={handleSubmit}>Créez votre compte Amazon</button>
                </form>

                <p>
                En créant un compte, vous acceptez les<a> Conditions<br/>
                générales de vente</a> d’Amazon. Veuillez consulter notre<br/>
                <a>Notice Protection de vos Informations Personnelles,<br/></a>
                notre <a>Notice Cookies</a> et notre <a>Notice Annonces<br/>
                publicitaires basées sur vos centres d’intérêt.</a>
                </p>

                <div className="register__login__container">
                    <div className="register__login__content"></div>
                    <p>
                        Vous possédez déjà un compte ? <Link to="/connexion" className='text-link'><a>Identifiez-vous</a></Link><br/>
                        Vous achetez pour votre entreprise?<a>Créez un<br/>
                        compte professionnel gratuit</a>
                    </p>
                </div>

            </div>

           
            <div className="register__footer">
                <div className="register__footer__container">
                </div>
                <div className="register__footer__link">
                    <a>Conditions d'utilisation</a>
                
                    <a>Protection des vos informations personelles</a>
                
                    <a>Aide</a>
            
                    <a>Cookies</a>
            
                    <a>Annonces basées sur vos centres d'interet</a>
                </div>
                <div className="register__footer__copyright">
                    © 1996-2021, Amazon.com, Inc. ou ses filiales.
                </div>
            </div>
        </div>
    )
}

export default Register
