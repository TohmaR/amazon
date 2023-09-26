import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAdressesContext } from "../../hooks/useAdressesContext"
import { useAuthContext } from "../../hooks/useAuthContext"
import './Adresse.css'

function Adresse() {
    const { adresses, dispatch } = useAdressesContext();
    const {user} = useAuthContext();

    useEffect(() => {
        const fetchAdresses = async () => {
            const response = await fetch('/api/adresses/adresse', {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${user.token}`
                },
            })

          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_ADRESSES', payload: json})
          }
        }
    
        if (user) {
          fetchAdresses()
        }
      }, [dispatch, user])

    return (
        <div className="adress">
            <div className="adress__container">
                <h1>Vos adresses</h1>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="adress__add">
                        <img src="../../assets\images\add_adress.png" />
                        <div className="adress__add__text">Ajouter une adresse</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Adresse
