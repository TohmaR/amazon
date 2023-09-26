import React,{ useState } from 'react'
import './Login.css'

import { Link, useHistory } from "react-router-dom"
import { useLogin } from '../../hooks/useLogin'

import LoginHelp from './LoginHelp/LoginHelp'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [nextInput, setNextInput] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const {login, error, isLoading} = useLogin()

    const signIn = async (e) => {
        e.preventDefault();
        await login(email, password)
    }

    const handleOPasswordVisibility = () =>{
        setPasswordVisibility(!passwordVisibility);
    }
    return (
        
        <div className="login">
            
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            {nextInput 
                ?   <div className="login__container">
                        <h1>S'identifier</h1>
                        <form>
                            <div className="login__email__container">
                                <span>{email}</span>
                                <a onClick={() => {setNextInput(nextInput => !nextInput)}}>Modifier</a>
                            </div>
                            
                            <div className="login__mdp__container">
                                <h5>Mot de passe</h5>
                                <Link to="/motdepasseoublie" className="text-link"><a >Mot de passe oublié</a></Link>
                            </div>
                            <div className="login__mdpInput__container">
                                <input type={passwordVisibility ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
                                {passwordVisibility ? <VisibilityOffOutlinedIcon className="login__mdpIcon" fontSize="small" onClick={handleOPasswordVisibility}/> :<VisibilityOutlinedIcon className="login__mdpIcon" fontSize="small" onClick={handleOPasswordVisibility}/>}
                                
                            </div>
                            { error && <div className="register__errorInput"><p>{error}</p></div>}
                            <button className="login__signInButton" type="button" onClick={signIn}>S'identifier</button>
                        </form>
                    </div>

         
                :   <><div className="login__container">
                        <h1>S'identifier</h1>
                        <form action="">
                            <h5>Adresse e-mail</h5>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                            <button className="login__signInButton" type="submit" onClick={() => {setNextInput(nextInput => !nextInput)}}>Continuer</button>
                        </form>

                        <p>
                        En passant votre commande, vous acceptez les<br/>
                        <a>Conditions générales de vente</a> d’Amazon. Veuillez<br/>
                        consulter notre <a>Notice Protection de vos informations<br/>
                        personnelles</a>, notre <a>Notice Cookies</a> et notre <a>Notice<br/>
                        Annonces publicitaires basées sur vos centres<br/>
                        d’intérêt.</a>
                        </p>

                        <LoginHelp />

                        

                    </div>
                    <div className="login__register__container">
                        <div className="login__registerHead">
                            <h5>Nouveau chez Amazon ?</h5>
                        </div>
                        <Link to="/inscription" className='text-link'>
                            <div className="login__registerButton">Créer votre compte Amazon</div>
                        </Link>
                        
                    </div></>
            }
            

            


            <div className="login__footer">
                <div className="login__footer__container">
                </div>
                <div className="login__footer__link">
                    <a>Conditions d'utilisation</a>
                 
                    <a>Protection des vos informations personelles</a>
                
                    <a>Aide</a>
             
                    <a>Cookies</a>
               
                    <a>Annonces basées sur vos centres d'interet</a>
                </div>
                <div className="login__footer__copyright">
                    © 1996-2021, Amazon.com, Inc. ou ses filiales.
                </div>
            </div>
        </div>
    )
}

export default Login
