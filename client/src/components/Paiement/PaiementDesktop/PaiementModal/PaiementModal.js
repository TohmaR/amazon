import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import "./PaiementModal.css";

import Visa from "../../../../assets/images/CreditCard/visa.png"
import MasterCard from "../../../../assets/images/CreditCard/mastercard.png"
import AmericanExpress from "../../../../assets/images/CreditCard/americanexpress.png"
import Aurore from "../../../../assets/images/CreditCard/aurore.png"
import CB from "../../../../assets/images/CreditCard/cb.png"

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    width: 400,
    backgroundColor: "white",
    outline : "none",
    borderRadius : "3px",
    width : "790px",
  },
}));

export default function PaiementModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const handleSubmit = (e) => {

  }

  const handleChange = (e) => {

  }

  const body = (
    <div className={classes.container}>
      <div className="paiement__modal__header">
        <p>Ajouter une carte de crédit ou de débit</p>
        <CloseIcon className="paiement__modal__close" fontSize="small" onClick={handleClose}></CloseIcon>
      </div>
      <div className="paiement__modal__content">
        <div className="paiement__modal__left">
          <form className="paiement__modal__cardDetails" onSubmit={handleSubmit}>
            <div className="paiement__modal__cardDetails__row">
              <label className="paiement__modal__cardDetails__label" htmlFor="cardnumber">Numéro de carte</label>
              <CardNumberElement className="paiement__modal__cardDetails__input" onChange={handleChange} />
            </div>
            <div className="paiement__modal__cardDetails__row">
              <label className="paiement__modal__cardDetails__label" htmlFor="exp-date">Nom sur la carte</label>
              <input className="paiement__modal__cardDetails__input"/>
            </div>
            <div className="paiement__modal__cardDetails__row">
              <label className="paiement__modal__cardDetails__label" htmlFor="exp-date">Date d'expiration</label>
              <CardExpiryElement className="paiement__modal__cardDetails__input"/>
            </div>
            <div className="paiement__modal__cardDetails__row">
              <label className="paiement__modal__cardDetails__label" htmlFor="cvc">Code de sécurité <br/>(CVV)</label>
              <CardCvcElement className="paiement__modal__cardDetails__input" placeholder=""/>
            </div>
          </form>
        </div>
        <div className="paiement__modal__right">
          <p>Amazon accepte la plupart des cartes de paiement</p>
          <div>
            <img src={Visa} alt=""/>
            <img src={MasterCard} alt=""/>
            <img src={AmericanExpress} alt=""/><br/>
            <img src={Aurore} alt=""/>
            <img src={CB} alt=""/>
          </div>
        </div>
      </div>
      <div className="paiement__modal__footer">
        <button className="paiement__modal__buttonAdd">Ajouter votre carte</button>
        <button className="paiement__modal__buttonClose" onClick={handleClose}>Annuler</button>
      </div>
    </div>
  );

  return (
    <div>
      <button className="paiement__button" type="button" onClick={handleOpen}>
        Ajoutez une carte de crédit ou de débit 
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}