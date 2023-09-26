import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../context/StateContext";

function SmartCartProduct({ id, image, price}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className='smartCart__subtotal__checkout__item'>
            <img src={image}/>
            <CurrencyFormat 
                renderText={(value) => (
                    <p className="smartCart__subtotal__checkout__price">
                        <strong>{value}</strong>
                    </p>
                )}
                decimalScale={2}
                fixedDecimalScale={true}
                value={price}
                displayType={"text"}
                thousandSeparator={" "}
                decimalSeparator={","}
                suffix={" €"}
            />
            <button onClick={removeFromCart}>
                <img src="https://m.media-amazon.com/images/G/08/x-locale/shopping-cart/trash_icon._CB427526449_.png" />
            </button>
        </div>
    )
}

export default SmartCartProduct;
