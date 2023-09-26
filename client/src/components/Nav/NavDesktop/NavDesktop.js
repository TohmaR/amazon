import React, { useState, useLayoutEffect } from "react";
import disableScroll from 'disable-scroll';
import { NavItems } from "./NavItems";
import { useAuthContext } from '../../../hooks/useAuthContext';
//Style;
import "./NavDesktop.css";

//Material-Ui Icon
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Nav(){
	const [activeMenu, setActiveMenu] = useState(false);
	const { user } = useAuthContext();

	if(activeMenu){
		disableScroll.on();
	}

	else{
		disableScroll.off();
	}
		

	return (
		<>
			<div className="nav">
				<div className="nav__left" onClick={() => setActiveMenu(!activeMenu)}>
					<MenuIcon className="nav__menuIcon" />
					<span className="nav__menu">Toutes</span>
				</div>
				<div className="nav__center">
					<ul>
						{NavItems.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
				<div className="nav__right">
					<img
						src="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1224328_1173746_FR_fr_brandweek_l_or_1w1b_3087864_400x39_fr_FR._CB431428303_.png"
						alt=""
					/>
				</div>
			</div>
			<div className={activeMenu ? "menu menu__active" : "menu"}>
				<CloseIcon
					fontSize="medium"
					className="menu__close"
					onClick={() => setActiveMenu(!activeMenu)}
				/>
				<a className="menu__customer__profile">
					<AccountCircleIcon
						fontSize="large"
						className="menu__customer__profileIcon"
					/>
					{user 
					?
						<span>Bonjour, {user.firstName}</span>
					:
						<span>Bonjour, Idendifiez-vous</span>
					}
				</a>
				<div className="menu__content">
					<ul className="menu__visible">
						<li>
							<div className="menu__title">Tendances</div>
						</li>
						<li>Meilleures Ventes</li>
						<li>Dernières Nouveautés</li>
						<li>Baromètre des ventes</li>
						<hr />
						<li>
							<div className="menu__title">
								Contenu Numérique Et Appareils
							</div>
						</li>
						<li>Amazon Prime Video</li>
						<li>Amazon Music</li>
						<li>Echo, Alexa, et Maison connectée</li>
						<li>Amazon Fire TV</li>
						<li>Liseuses Kindle & ebooks</li>
						<li>Livre audio Audible</li>
						<li>Tablettes Fire</li>
						<li>Appstore pour Android</li>
						<hr />
						<li>
							<div className="menu__title">Choisir Une Catégorie</div>
						</li>
						<li>Livres</li>
						<li>Musique, DVD et Blu-ray</li>
						<li>Jeux vidéo et Consoles</li>
						<li>High-Tech</li>
						{/* compresed */}
						<hr />
						<li>
							<div className="menu__title">Programme Et Services</div>
						</li>
						<li>Amazon Launchpad</li>
						<li>Amazon Business</li>
						<li>Amazon Second Chance</li>
						<li>Toutes les catégories</li>
						<hr />
						<li>
							<div className="menu__title">Aide Et Paramètres</div>
						</li>
						<li>Votre compte</li>
						<li>Service Client</li>
						<li>Se Connecter</li>
					</ul>
				</div>
			</div>
			<div className={activeMenu ? "menu__background menu__background__active" : "menu__background"}></div>
		
		</>
	);

}

export default Nav;
