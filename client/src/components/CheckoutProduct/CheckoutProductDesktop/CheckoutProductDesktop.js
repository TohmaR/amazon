import React from 'react'
import './CheckoutProductDesktop.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../context/StateContext";

function CheckoutProduct({ id, image, title, price}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct__left">
                <div className="checkoutProduct__container__image">
                    <img className="checkoutProduct__image" src={image}/>
                </div>
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <span className="checkoutProduct__priceMobile">{price} €</span>
                    <button onClick={removeFromCart}>Supprimer</button>
                </div>
            </div>
            <div className="checkoutProduct__price">
                <CurrencyFormat 
                    renderText={(value) => (  
                        <strong>{value}</strong>
                    )}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    value={price}
                    displayType={"text"}
                    thousandSeparator={" "}
                    decimalSeparator={","}
                    suffix={" €"}    
                />
            </div>
        </div>
    )
}

export default CheckoutProduct;
