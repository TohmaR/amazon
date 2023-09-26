import React, { useState, useLayoutEffect} from 'react';
import { useStateValue } from '../../context/StateContext'
import { Link, useHistory } from 'react-router-dom'
import CurrencyFormat from "react-currency-format";
//Style
import './Product.css';
import 'react-notifications-component/dist/theme.css'
//Images
import Prime from '../../assets/images/prime.png';

//Material-Ui Icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Product({id, title, image, price, ratingStar, ratingNumber, prime, category, url}) {
    const [cart , dispatch] = useStateValue();
    const history = useHistory();
    
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                ratingStar: ratingStar,
                ratingNumber: ratingNumber,
                category: category,
                prime: prime,
                url: url,
                quantity:1
            },
        });
        history.push('/smart-cart')
    };
    return (
        <div className="product">
           <Link to={"/"+url}><img src={image} alt=""/></Link>
         

            <div className="product__info">
                <Link to={"/"+url} className="text-link"><p>{title}</p></Link>
                <div className="product__rating">
                    <div className="product__rating__star">
                        {Array(ratingStar).fill().map((_, i) => (<img className="product__rating__star__image" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.5/72x72/2b50.png"/>))}
                        <ExpandMoreIcon fontSize="small" className="product__ratingIcon"/>
                        <CurrencyFormat 
                            renderText={(value) => (
                                <span className="product__rating__number">{value}</span>
                            )}
                            value={ratingNumber}
                            displayType={"text"}
                            thousandSeparator={" "}
                        />
                    </div>

                </div>
                <CurrencyFormat 
                    renderText={(value) => (
                        <p className="product__price">
                            <span>{value}</span>
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
                {prime && <img className='product__prime' src={Prime} alt=''/>}
                <div className="product__shipping">
                    Livraison GRATUITE par Amazon<br/>
                    Habituellement expédié sous 1 à 4 semaines.
                </div>
            </div>

            <button onClick={addToCart}>Ajouter au panier</button>
        </div>
    )
}

export default Product;
