import React from 'react'
import { useStateValue } from "../../../context/StateContext";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../../Reducer";

//Style
import './SubtotalMobile.css'

//Material-Ui Icon
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function SubtotalMobile() {
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="subtotalMobile">
            {
                cart.length > 0

                ?<CurrencyFormat 
                    renderText={(value) => (

                        <>
                            <p>
                                Sous-total ({cart.length} {cart.length > 1 ? "articles" : "article"} ) : <strong className="subtotalMobile__price">{value}</strong>
                            </p>
                            {
                                getCartTotal(cart) > 25 

                                ?<div className="subtotalMobile__infoShipping">
                                    <CheckCircleIcon fontSize="small" className="subtotalMobile__infoShippingIcon" />
                                    <p className="subtotalMobile__infoShippingText2">
                                        <span>Votre commande est éligible a la livraison
                                        Standart gratuite en France
                                        métropolitaine </span><a>restrictions applicables</a><br/>
                                        Choissisez cette option lors de votre
                                        commande
                                    </p>
                                </div>
                                :<div className="subtotalMobile__infoShipping">
                                    <InfoIcon fontSize="small" className="subtotalMobile__infoShippingIcon" />
                                    <p className="subtotalMobile__infoShippingText">
                                        Ajoutez <CurrencyFormat renderText={(value) => (<span>{value}</span>)} decimalScale={2} fixedDecimalScale={true} value={25 - getCartTotal(cart)} displayType={"text"} decimalSeparator={","} suffix={" €"}  /> d'articles expédié par<br/>
                                        Amazon pour obtenir la livraison<br/>
                                        GRATUITE en France métropolitaine. <a>Voir<br/>
                                        condition</a>
                                    </p>
                                </div>
                            

                            }
                           
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

export default SubtotalMobile
