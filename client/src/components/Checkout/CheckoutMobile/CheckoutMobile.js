import React from 'react'
import Subtotal from '../../Subtotal/Subtotal';
import { useStateValue } from "../../../context/StateContext";
import CheckoutProduct from "../../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import CartGIF from "../../../assets/images/cart.gif";

//Style 
import "./CheckoutMobile.css";

function CheckoutMobile() {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className="checkoutMobile">

            
            <div className="checkoutMobile__header">
                <Link to="/panier" className="text-link"><span>Panier</span></Link>
                <Link to="/" className="text-link"><span>Achetez a nouveau</span></Link>
            </div>
            {cart?.length > 0 && <Subtotal />}
            <div className="checkoutMobile__cart">
                
                {cart.length < 1 && user  
                    &&<div className="checkoutMobile__cartEmpty">
                        <img src={CartGIF} alt=""/>
                        <div className="checkoutMobile__cartEmpty__content">
                            <p>Votre panier Amazon est vide</p>
                            <Link to="/" className="text-link"><span>Voir les recommandations</span></Link>
                        </div>
                    </div>
                    
                    
                }
                
                {!user && cart.length < 1 
                    &&<div className="checkoutMobile__cart__anonymous__container">
                            <img className="checkoutMobile__cart__anonymous__image" src="https://m.media-amazon.com/images/G/08/cart/empty/kettle-desaturated._CB424694058_.svg" alt=""/>
                            <div className="checkoutMobile__cart__anonymous__content">
                                <h2 className="checkoutMobile__cart__anonymous__head">Votre panier Amazon est vide</h2>
                                <Link to="/" className="text-link"><a className="checkoutMobile__cart__anonymous__link">Acheter les offres du jour</a></Link>
                                <div className="checkoutMobile__cart__anonymous__containerBtn">
                                    <Link to="/connexion" className='text-link'>
                                        <div className="checkoutMobile__cart__anonymous__button1">Connectez-vous a votre compte</div>
                                    </Link>
                                    <Link to="/inscription" className='text-link'>
                                        <div className="checkoutMobile__cart__anonymous__button2">Inscrivez-vous maintenant</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                }

                
        

                {cart.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="checkoutMobile__return">
                <p><span>Les retours sont faciles</span><br/>Retours dans les 30 jours sur des millions<br/>d'articles</p>
                <img src="https://m.media-amazon.com/images/G/08/x-locale/checkout/returns-box._CB453980378_.png" alt=""/>
            </div>
        </div>
    );
}

export default CheckoutMobile;
