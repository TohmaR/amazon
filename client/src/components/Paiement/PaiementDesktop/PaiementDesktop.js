import React from 'react'
import PaiementModal from './PaiementModal/PaiementModal'
import "./PaiementDesktop.css";

//images
import Visa from "../../../assets/images/CreditCard/visa.png"
import MasterCard from "../../../assets/images/CreditCard/mastercard.png"
import AmericanExpress from "../../../assets/images/CreditCard/americanexpress.png"
import Aurore from "../../../assets/images/CreditCard/aurore.png"
import CB from "../../../assets/images/CreditCard/cb.png"

function Paiement() {
  
    return (
        <div className="paiement">
            <div className="paiement__container">
                <img className="paiement__header" src="https://images-eu.ssl-images-amazon.com/images/G/08/checkout/payselect/progressbar-payments._CB485923134_.gif" alt=""/>
                <h1>Sélectionnez un mode de paiement</h1>
                <div className="paiement__card">
                    <div className="paiement__card__left">
                        <span>Cartes de crédit ou cartes de débit</span>
                        <p>Amazon accepte les principales cartes de crédit et de débit.</p>
                        <PaiementModal />
                    </div>
                    <div className="paiement__card__right">
                        <img src={Visa} alt=""/>
                        <img src={MasterCard} alt=""/>
                        <img src={AmericanExpress} alt=""/><br/>
                        <img src={Aurore} alt=""/>
                        <img src={CB} alt=""/>
                    </div>
                </div>
            </div>
            <div className="paiement__validation">
                <div className="paiement__validation__container">
                    <button className="paiement__validation__button">Continuer</button>
                    <p>Vous pourrez vérifier cette commande avant validation</p>
                </div>
            </div>
        </div>
    )
}

export default Paiement;