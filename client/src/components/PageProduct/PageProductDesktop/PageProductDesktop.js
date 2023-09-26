import React from 'react'

function PageProductDesktop({ key, title, category, image, price, ratingStar, ratingNumber, prime, url }) {
    return (
        <div>
            {title}
            <img src={image}/>
        </div>
    )
}

export default PageProductDesktop
