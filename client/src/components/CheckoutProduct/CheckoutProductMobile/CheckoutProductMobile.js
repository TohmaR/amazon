import React from 'react'
import './CheckoutProductMobile.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../context/StateContext";

function CheckoutProductMobile({ id, image, title, price}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className="checkoutProductMobile">
            <div className="checkoutProductMobile__left">
                <div className="checkoutProductMobile__container__image">
                    <img className="checkoutProductMobile__image" src={image}/>
                </div>
                <div className="checkoutProductMobile__info">
                    <p className="checkoutProductMobile__title">{title}</p>
                    <span className="checkoutProductMobile__priceMobile">
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
                    </span>
                    <button onClick={removeFromCart}>Supprimer</button>
                </div>
            </div>
            
        </div>
    )
}

export default CheckoutProductMobile;
