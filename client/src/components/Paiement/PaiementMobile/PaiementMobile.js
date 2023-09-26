import React from 'react'
import { Link } from 'react-router-dom'
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import "./PaiementMobile.css";

function PaiementMobile() {
    const handleSubmit = (e) => {

    }
  
    const handleChange = (e) => {
  
    }
    return (
        <div className="paiementMobile">
            <div className="paiementMobile__header">
            <Link to="/">
                <img className="paiementMobile__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            </div>
            <div className="paiementMobile__container">
                <span>Saisissez les informations de votre carte de crédit</span>
                <form className="paiement__modal__cardDetails" onSubmit={handleSubmit}>
                  
                    <CardNumberElement className="paiementMobile__cardDetails__input" onChange={handleChange} />
                  
                    <input className="paiementMobile__cardDetails__input" placeholder="Nom sur la carte"/>
                   
                    <CardExpiryElement className="paiementMobile__cardDetails__input"/>
                   
                    <CardCvcElement className="paiementMobile__cardDetails__input"/>
               
                </form>
            </div>
        </div>
    )
}

export default PaiementMobile;