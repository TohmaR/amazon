import React from 'react'
import { useStateValue } from "../../../context/StateContext";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../../Reducer";

//Style
import './SubtotalDesktop.css'

//Material-Ui Icon
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function SubtotalDesktop() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {
                cart.length > 0

                ?<CurrencyFormat 
                    renderText={(value) => (
                        <>
                            {
                                getCartTotal(cart) > 25 

                                ?<div className="subtotal__infoShipping">
                                    <CheckCircleIcon fontSize="small" className="subtotal__infoShippingIcon" />
                                    <p className="subtotal__infoShippingText2">
                                        <span>Votre commande est éligible a la livraison<br/> 
                                        Standart gratuite en France<br/>
                                        métropolitaine </span><a>restrictions applicables</a><br/>
                                        Choissisez cette option lors de votre<br/>
                                        commande
                                    </p>
                                </div>
                                :<div className="subtotal__infoShipping">
                                    <InfoIcon fontSize="small" className="subtotal__infoShippingIcon" />
                                    <p className="subtotal__infoShippingText">
                                        Ajoutez <CurrencyFormat renderText={(value) => (<span>{value}</span>)} decimalScale={2} fixedDecimalScale={true} value={25 - getCartTotal(cart)} displayType={"text"} decimalSeparator={","} suffix={" €"}  /> d'articles expédié par<br/>
                                        Amazon pour obtenir la livraison<br/>
                                        GRATUITE en France métropolitaine. <a>Voir<br/>
                                        condition</a>
                                    </p>
                                </div>
                            

                            }
                            <p>
                                Sous-total ({cart.length} {cart.length > 1 ? "articles" : "article"} ) : <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"/>
                                Commande contenant un cadeau
                            </small>
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

                :<p>Aucun article sélectionné</p>
                
            }
            

            <button>Passer la commande</button>
        </div>
    );
}

export default SubtotalDesktop;
