import React from 'react'
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from "../../context/StateContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../Reducer";
import checkSmartCart from "../../assets/images/check-smartCart.PNG";
import MediaQuery from 'react-responsive'

//Style 
import "./SmartCart.css";

function SmartCart() {
    const [{cart, user}, dispatch] = useStateValue();
    const lastProduct = cart[cart.length - 1];
    return (
        <div className="smartCart">
            <div className="smartCart__left">
                {cart.length > 0
                ?
                    <>
                        <div>
                            <img className="smartCart__left__image" src={lastProduct.image} />
                        </div>
                        <div className="smartCart__left__text">
                            <img src={checkSmartCart} />
                            <div>Ajouté au panier</div>
                        </div>
                    </>
                :
                    <div className="smartCart__left__text">Le panier est vide</div>
                }
                
                
            </div>
            <div className='smartCart__right'>
                <div className='smartCart__right__text'>
                    <p>Votre commande est éligible à la livraison<br/>Standard gratuite en France métropolitaine.<br/>Restrictions applicables</p>
                    <span>Choisissez cette option lors de votre commande</span>
                </div>
                <div className='smartCart__right__subtotal'>  
                    <CurrencyFormat 
                        renderText={(value) => (
                            <>
                                <p>
                                    Sous-total du panier : <strong>{value}</strong>
                                </p>
                            </>
                        )}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={" "}
                        decimalSeparator={","}
                        suffix={" €"}
                    />
                    <div className='smartCart__right__button__container'>
                        <button className="smartCart__right__button1">Passer la commande</button>
                        <Link to="/panier"><button className="smartCart__right__button2">Aller au panier</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartCart;
