import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { LocationList1, LocationList2 } from "./LocationList";
import "./Location.css"


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    height : "300px",
    borderRadius : "8px",
    width: "373px",
    backgroundColor: "white",
    outline : "none",

  },
  
}));

function Location() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('Entrez votre adresse');
  const [locationInput, setLocationInput] = useState('Entrez votre adresse');
  const [locationSelected, setLocationSelected] = useState(false);


  useEffect(() => {
    const dataLocationSelected = localStorage.getItem('locationSelected');
    const dataLocation = localStorage.getItem('location');
    if(dataLocation){
        setLocation(JSON.parse(dataLocation));
    }
    if(dataLocationSelected){
        setLocationSelected(JSON.parse(dataLocationSelected));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locationSelected' , JSON.stringify(locationSelected));
    localStorage.setItem('location' , JSON.stringify(location));

  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLocationChangeInput = () => {
    setLocation(locationInput)
    setOpen(false);
    setLocationSelected(true)
  }

  const handleLocationChangeSelect = (e) => {
    setLocation(e.target.value)
    setOpen(false);
    setLocationSelected(true)
  }

  const body = (
		<div className={classes.container}>
			<div className="location__modal__head">
				<p>Choisissez votre emplacement</p>
			</div>
			<div className="location__modal__content">
				<p className="location__modal__paragraph1">
					Sélectionnez votre lieu de livraison pour voir les options de
					<br />
					livraison
				</p>

				<div className="location__modal__buttonLogin">
					Identifiez vous pour voir vos adresses
				</div>

				<p className="location__modal__paragraph2">ou entrez un code postal en france métropolitaine</p>
				<div className="location__modal__input">
					<input className="location__modal__input" type="text" onChange={(e) => setLocationInput(e.target.value)}/>
					<button onClick={handleLocationChangeInput}>Actualiser</button>
				</div>
				<p className="location__modal__paragraph1">ou</p>
				<select onChange={handleLocationChangeSelect} value={location}>
					<option >Livrez hors France métropolitaine</option>
					<optgroup>
						{LocationList1.map((item, index) =>{
              return(
                  <option key={index} value={item}>{item}</option>
              )
                
            })}
					</optgroup>
          <optgroup>
						{LocationList2.map((item, index) =>{
              return(
                  <option key={index} value={item}>{item}</option>
              )
                
            })}
					</optgroup>
					
				</select>
			</div>
		</div>
	);

    return (
        <div>
            <div className="header__location"  onClick={handleOpen}>
                <LocationOnOutlinedIcon fontSize="small" className="header__locationIcon"/>
                <div className="header__locationText">
                    <span 
                    className="header__optionLineOne">
                    {locationSelected ? "Votre adresse de livraison:" : "Bonjour" }</span>
                    <span 
                    className="header__optionLineTwo">
                    {location}</span>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                
            >
                {body}
            </Modal>
        </div>
       
    )
}

export default Location;
