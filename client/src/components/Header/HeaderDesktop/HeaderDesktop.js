import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../../context/StateContext";
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useLogout } from '../../../hooks/useLogout';
import Category from "./Category/Category";
import Location from "./Location/Location";

//Style
import './HeaderDesktop.css';

//Material-Ui Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';





function HeaderDesktop(){
    const history = useHistory();
    const [{cart, searchBar}, dispatch] = useStateValue();
    const { user } = useAuthContext();
    const [searchTerm, setSearchTerm] = useState("");
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [searchBarFocused, setSearchBarFocused] = useState(false);
    const { logout } = useLogout();
    

    const handleLogout = () => {
        logout();
        window.location.reload(false);
    }

    const handleSearchBarInput = (e) => {
        dispatch({
            type: "SEARCH_BAR",
            searchBar: searchTerm,
        });
        setSearchBarFocused(!searchBarFocused);
    };

    const handleSearchBarButton = (e) => {
        dispatch({
            type: "SEARCH_BAR",
            searchBar: searchTerm,
        })
    };

    
 
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            
            <Location />

            <div className={searchBarFocused ? "header__search header__search__focused" : "header__search"}>
                <Category />
                <input className="header__searchInput" type="text" onChange={(e) => setSearchTerm(e.target.value)} onBlur={handleSearchBarInput} onFocus={() => setSearchBarFocused(!searchBarFocused)} />
                <SearchIcon className="header__searchIcon"  onClick={handleSearchBarButton}/>
            </div>

            <div className="header__nav">
                <div className="header__option header__account" onMouseEnter={() => setAccountDropdown(!accountDropdown)} onMouseLeave={() => setAccountDropdown(!accountDropdown)}>
                    <span 
                    className="header__optionLineOne">
                    Bonjour, {user ? user.firstName : "Identifiez-vous"}</span>
                    <span 
                    className="header__optionLineTwo">
                    Compte et listes<ArrowDropDownIcon fontSize="small" className="header__accountIcon"/></span>
                    <div className={accountDropdown ?"header__account__dropdown header__account__dropdown__active" : "header__account__dropdown"}>
                <div className="header__account__signIn">
                    {user 
                    ?
                        <div className="text-link"><button className="header__account__signIn__button" onClick={handleLogout}>Déconnectez vous</button></div>
                    :
                        <Link to="/connexion" className="text-link"><button className="header__account__signIn__button">Identifiez-vous</button></Link>
                    }
                    <div className="header__account__signIn__text">
                        Nouveau client ? <a href="">Commencez ici.</a>
                    </div>

                </div>
        
                <div className="header__account__list__Wrapper">
                    <div className="header__account__list">
                        <h4>Vos listes d'envies</h4>
                        <ul>
                            <li>Créer une liste</li>
                            <li>Trouver une liste</li>
                            <li>Liste d'envie universelle</li>
                            <li>Liste de mariage</li>
                            <li>Liste de naissance</li>
                            <li>Kids' Wish List</li>
                            <li>Découvrez votre style</li>
                            <li>Explorer Showroom</li>
                        </ul>
                    </div>
                    <div className="header__account__list">
                        <h4>Votre compte</h4>
                        <ul>
                            <Link to={user ? "./profil" : "./connexion"}><li>Votre compte</li></Link>
                            <li>Vos commandes</li>
                            <li>Votre liste d'envies</li>
                            <li>Vos recommandations</li>
                            <li>Vos animaux de compagnies</li>
                            <li>Vos Livraisons Programmées</li>
                            <li>Adhésions et abonnements</li>
                            <li>Votre compte Amazon Prime</li>
                            <li>Devenez client Amazon Business</li>
                            <li>Gérer votre contenu et vos appareils</li>
                            <li>Votre abonnement Kindle</li>
                            <li>Votre bibliothèque musicale</li>
                            <li>Votre Prime Video</li>
                            <li>Votre Amazon drive</li>
                            <li>Votre Bibliothèque de jeux et logiciels</li>
                            <li>Vos applis et vos appareils</li>
                        </ul>
                    </div>
                </div>
                
            </div>
                </div>
                
                <div className="header__option">
                <span 
                    className="header__optionLineOne">
                    Retours</span>
                    <span 
                    className="header__optionLineTwo">
                    et Commandes</span>
                </div>

                <div className="header__option">
                <span 
                    className="header__optionLineOne">
                    Votre</span>
                    <span 
                    className="header__optionLineTwo">
                    Prime</span>
                </div>
                <Link to="/panier" className="text-link">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header__basketCount">
                            {cart?.length}
                        </span>
                        <span className="header__optionLineTwo">Panier</span>
                    </div>
                </Link>
                
            </div>
            <div className={accountDropdown ? "header__account__background header__account__background__active" : "header__account__background"}></div>

        </header>
    )   
}

export default HeaderDesktop;
