import React,{ useState } from 'react'
import ButtonData from './ButtonData.json'
import ProfileCard from './ProfileCard'
import './Profile.css'

function Profile() {

    return (
        <div className="profile">
            <h1>Votre compte</h1>
            <div className="profile__container">
                {ButtonData.map((item) => {
                    return(
                        <ProfileCard title={item.title} image={item.image} text={item.text} link={item.link} />
                    );
                })}       
            </div>
        </div>
    )
}

export default Profile
