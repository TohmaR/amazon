import React from 'react'
import Subtotal from '../../Subtotal/Subtotal';
import { useStateValue } from "../../../context/StateContext";
import { useAuthContext } from '../../../hooks/useAuthContext';
import CheckoutProduct from "../../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../../Reducer";

//Style 
import "./CheckoutDesktop.css";

function Checkout() {
    const [{cart}, dispatch] = useStateValue();
    const { user } = useAuthContext();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://m.media-amazon.com/images/I/51eJdKjBLGL.jpg" alt="" 
                />
                
                <div className="checkout__cart">
                    {
                        !user & cart.length <= 0 
                        
                        ?   <div className="checkout__cart__anonymous__container">
                                <img className="checkout__cart__anonymous__image" src="https://m.media-amazon.com/images/G/08/cart/empty/kettle-desaturated._CB424694058_.svg" alt=""/>
                                <div className="checkout__cart__anonymous__content">
                                    <h2 className="checkout__cart__anonymous__head">Votre panier Amazon est vide</h2>
                                    <Link to="/" className="text-link"><a className="checkout__cart__anonymous__link">Acheter les offres du jour</a></Link>
                                    <div className="checkout__cart__anonymous__containerBtn">
                                        <Link to="/connexion" className='text-link'>
                                            <div className="checkout__cart__anonymous__button1">Connectez-vous a votre compte</div>
                                        </Link>
                                        <Link to="/inscription" className='text-link'>
                                            <div className="checkout__cart__anonymous__button2">Inscrivez-vous maintenant</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        
                        
                        :   <div className="checkout__head">
                                <h2 className="checkout__title">Votre panier{cart.length < 1 && " Amazon est vide"}</h2>
                                <span className="checkout__title__price">Prix</span>
                            </div> 
                    
                    }
                    
            
                    <div className="checkout__cart__container">
                        {cart.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>  
                </div>
                {cart?.length > 0 && <div className="checkout__subtotal">
                    <CurrencyFormat 
                        renderText={(value) => (
                            <>
                                <p>
                                    Sous-total ({cart.length} {cart.length > 1 ? "articles" : "article"} ) : <strong>{value}</strong>
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
                </div>}
                
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
