import React,{ useState } from 'react'
import { useStateValue } from "../../../context/StateContext";
import { useAuthContext } from '../../../hooks/useAuthContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./HeaderMobile.css"

//Material-Ui Icon
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from '@material-ui/icons/Search';

function HeaderMobile() {
    const [{cart}, dispatch] = useStateValue();
	const { user } = useAuthContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [menuVisible, setMenuVisible] = useState(false)

    
	

    const handleSearchBar = (e) => {
        dispatch({
            type: "SEARCH_BAR",
            searchBar: searchTerm,
        });
    };
    return (
        <header className="headerMobile">
            <div className="headerMobile__logoBar">
                <div className="headerMobile__left">
                    <MenuIcon className="headerMobile__menuIcon" onClick={() => setMenuVisible(!menuVisible)}/>
                    <Link to="/">
                        <img className="headerMobile__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                    </Link>
                </div>
                <div className="headerMobile__right">
                    <span 
                        className="headerMobile__account">
                        {user ? <div>Bonjour <strong>{user.firstName}</strong></div>  : <Link to="/connexion" className="text-link">Se connecter</Link>}
                    </span>
                    <Link to="/panier" className="text-link">
                        <div className="headerMobile__cart">
                            <ShoppingCartOutlinedIcon />
                            <span className="headerMobile__cartCount">
                                {cart?.length}
                            </span>
                        </div>
                    </Link>
                </div>
                   
            </div>
            <div className="headerMobile__search">
                <input className="headerMobile__searchInput" placeholder="Rechercher Amazon.fr" onChange={(e) => setSearchTerm(e.target.value)} onBlur={handleSearchBar}/>
                <SearchIcon fontSize="large" className="headerMobile__searchIcon" onClick={handleSearchBar}/>
                
            </div>
            <div className={menuVisible ? "headerMobile__menu headerMobile__menu__active" : "headerMobile__menu"}>
				<CloseIcon
					fontSize="medium"
					className="headerMobile__menu__close"
					onClick={() => setMenuVisible(!menuVisible)}
				/>
				<a className="headerMobile__menu__customer__profile">
					<AccountCircleIcon
						fontSize="large"
						className="headerMobile__menu__customer__profileIcon"
					/>
					{user 
					?
						<span>Bonjour, {user.firstName}</span>
					:
						<span>Bonjour, Idendifiez-vous</span>
					}
				</a>
				<div className="headerMobile__menu__content">
					<ul className="headerMobile__menu__visible">
						<li>
							<div className="headerMobile__menu__title">Tendances</div>
						</li>
						<li>Meilleures Ventes</li>
						<li>Dernières Nouveautés</li>
						<li>Baromètre des ventes</li>
						<hr />
						<li>
							<div className="headerMobile__menu__title">
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
							<div className="headerMobile__menu__title">Choisir Une Catégorie</div>
						</li>
						<li>Livres</li>
						<li>Musique, DVD et Blu-ray</li>
						<li>Jeux vidéo et Consoles</li>
						<li>High-Tech</li>
						{/* compresed */}
						<hr />
						<li>
							<div className="headerMobile__menu__title">Programme Et Services</div>
						</li>
						<li>Amazon Launchpad</li>
						<li>Amazon Business</li>
						<li>Amazon Second Chance</li>
						<li>Toutes les catégories</li>
						<hr />
						<li>
							<div className="headerMobile__menu__title">Aide Et Paramètres</div>
						</li>
						<li>Votre compte</li>
						<li>Service Client</li>
						<li>Se Connecter</li>
					</ul>
				</div>
			</div>
            <div className={menuVisible ? "headerMobile__menu__background headerMobile__menu__background__active" : "headerMobile__menu__background"}></div>

        </header>
    )
}

export default HeaderMobile
