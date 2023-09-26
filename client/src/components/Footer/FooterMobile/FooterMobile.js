import React from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useLogout } from '../../../hooks/useLogout';
import { Link } from 'react-router-dom';
//Style
import './FooterMobile.css'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function FooterMobile() {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleLogOut = () => {
        logout();
        window.location.reload(false);
        window.scrollTo(0, 0);
    }
    return (
        <footer className="footerMobile">
            <a className="footerMobile__link__backToTop" href="#" alt="">
                <div className="footerMobile__backToTop">
                    <ArrowDropUpIcon fontSize="small"/>
                    <span>HAUT DE LA PAGE</span>
                </div>
            </a>
            <div className="footerMobile__nav">
                <div className="footerMobile__nav__left">
                    <ul>
                        <li>Retours</li>
                        <li>Service Client</li>
                        <li>Aide</li>
                        <li>Vendre sur Amazon</li>
                        <li>Devenez client Amazon Business</li>
                        <li>Vendez sur Amazon business</li>
                        <li>Information sur notre Marketplace</li>
                        <li>Gérer vos abonnement</li>
                        <li>Coordonnées 1-CLick</li>
                        <li>Accéssibilité</li>
                    </ul>
                </div>
                <div className="footerMobile__nav__right">
                    <ul>
                        <li>Chez {user?.displayName}</li>
                        <li>Vos commandes</li>
                        <li>Votre compte</li>
                        <li>Vos listes</li>
                        <li>Trouver une liste</li>
                        <li>Trouver un cadeau</li>
                        <li>Articles que vous avez consultés récemment</li>
                        <li>Télécharger l'application Amazon</li>
                        <li>Recyclage (y compris les équipements électriques et électroniques)</li>
                        <li>Site Amazon pour ordinateur</li>
                    </ul>
                </div>
            </div>
            <div className="footerMobile__log">
                {user 
                ?<>
                    <Link to="/connexion" className="text-link"><span>Utiliser un compte différent</span></Link>
                    <span onClick={handleLogOut}>Déconnectez-vous</span>
                </>
                :<Link to="/connexion" className="text-link"><span>Déjà client(e) ? Se connecter</span></Link>
                }
            </div>
            <div className="footerMobile__links">
               <span>Conditions générales de vente</span>
               <span>Conditions de participation au programme Marketplace</span>
               <span>Vos informations personselles</span>
               <span>Cookies</span>
               <span>Annonces basées sur vos cnetres d'intéret</span>
            </div>
            <div className="footerMobile__copyright">
                © 1996-{(new Date().getFullYear())} Amazon.com, Inc.
            </div>
           
            
        </footer>
    )
}

export default FooterMobile
