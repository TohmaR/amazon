import { Link } from "react-router-dom";
import './Profile.css'

const profileCard = ({ title, image, text, link }) => {
    return (
        
            <Link to={link} className='profile__Card'>
                <div className='profile__image'>
                    <img src={image} />
                </div>
                <div>
                    <div className="profile__title">
                        {title}
                    </div>
                    <div>
                        {text}
                    </div>
                </div> 
            </Link>
    )
}

export default profileCard