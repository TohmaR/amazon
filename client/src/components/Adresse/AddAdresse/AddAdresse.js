import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdressesContext } from "../../../hooks/useAdressesContext"
import { useAuthContext } from "../../../hooks/useAuthContext"
import './AddAdresse.css';

import { LocationList2 } from "../../Header/HeaderDesktop/Location/LocationList";

function AddAdresse() {
    const [country, setCountry] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [adresse, setAdresse] = useState();
    const [zipCode, setZipCode] = useState();
    const [city, setCity] = useState();
    const [error, setError] = useState();
    const { dispatch } = useAdressesContext()
    const { user } = useAuthContext()


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user) {
            setError('Vous devez etre connecté')
            return
        }

        const adresse = {country, firstName, lastName, phoneNumber, adresse, zipCode, city}

        const response = await fetch('/api/adresses/addAdresse', {
            method: 'POST',
            body: JSON.stringify(adresse),
            headers: {
                'Content-Type': 'application/json',
               
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setCountry('');
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setAdresse('');
            setZipCode('');
            setCity('');
            setError(null);
            dispatch({type: 'CREATE_ADRESSE', payload: json})
        }
    }

    return (
        <div className="addAdress">
            <div className="addAdresse__container">
                <h1>Ajouter une nouvelle adresse</h1>
                <form>
                    <select onChange={e => setCountry(e.target.value)} value={country}>
                        <optgroup>
                            {LocationList2.map((item, index) =>{
                                return(
                                    <option key={index} value={item}>{item}</option>
                                )
                            })}
                        </optgroup>
                    </select>
                    <h5>Prénom</h5>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <h5>Nom</h5>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <h5>Numéro de téléphone</h5>
                    <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    <h5>Adresse</h5>
                    <input type="text" value={adresse} onChange={e => setAdresse(e.target.value)}/>
                    <h5>Code postal</h5>
                    <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                    <h5>Ville</h5>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
                    <button className="addAdresse__signInButton" onclick={handleSubmit}>Ajouter une adresse</button>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default AddAdresse
