import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../../context/StateContext'
import { Link, useHistory } from 'react-router-dom'

//Material-Ui Icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./PageProductDesktop.css"

function PageProductDesktop({ key, title, category, image, price, ratingStar, ratingNumber, prime, url }) {
    const [cart , dispatch] = useStateValue();
    const history = useHistory();
    
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: key,
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
        <div className="pageProduct">
            <div className="pageProduct__container">
                <div className="pageProduct__left">
                    <div className="pageProduct__return">‹ Retour aux résultats</div>
                    <img src={image}/>
                </div>
                <div className="pageProduct__center">
                    <div className="pageProduct__title">{title}</div>
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
                    <div>
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
                        <div>Tous les prix incluent la TVA.</div>
                        <div>Payez cet article en 4 fois <span>Voir détails et conditions</span></div>
                    </div>
                </div>
                <div className="pageProduct__right">
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
                    <button onClick={addToCart}>Ajouter au panier</button>
                </div>
            </div>

        </div>
    )
}

export default PageProductDesktop
