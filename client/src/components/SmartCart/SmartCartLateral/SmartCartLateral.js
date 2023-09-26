import React from 'react'

import { useStateValue } from "../../../context/StateContext";

import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../../Reducer";

//Style 
import "./SmartCartLateral.css";
import SmartCartProduct from '../SmartCartProduct/SmartCartProduct';

function SmartCartLateral() {
    const [{cart}, dispatch] = useStateValue();
    
    return (
        <div className="smartCartLateral">
            <div className="smartCartLateral__triangle"></div>
            <div className="smartCartLateral__subtotal">
                <div className='smartCartLateral__subtotal__title'>Sous-total</div>
                <CurrencyFormat 
                    renderText={(value) => (
                        <p className='smartCartLateral__subtotal__amount'>
                            <strong>{value}</strong>
                        </p>
                    )}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={" "}
                    decimalSeparator={","}
                    suffix={" €"}
                />
                <div className='smartCart__subtotal__text'>
                    <p>Votre commande est éligible à la livraison<br/>Standard gratuite en France métropolitaine.<br/>Restrictions applicables</p>
                    <span>Choisissez cette option lors de votre commande</span>
                </div>
                <button className="smartCart__subtotal__button">Passer la commande</button>
            </div>
            {cart.length > 0
            &&
                <div className="smartCart__subtotal__checkout">
                    {cart.map(item =>(
                        <SmartCartProduct 
                            id={item.id}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            }
            
              
          
                   
        </div>
    );
}

export default SmartCartLateral;
