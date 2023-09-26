import React from "react";
import MediaQuery from 'react-responsive'
import PageProductDesktop from "./PageProductDesktop/PageProductDesktop";
import PageProductMobile from "./PageProductMobile/PageProductMobile";


function PageProduct({ key, title, category, image, price, ratingStar, ratingNumber, prime, url }) {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<PageProductDesktop 
					key={key}
					title={title}
					category={category}
					image={image}
					price={price}
					ratingStar={ratingStar}
					ratingNumber={ratingNumber}
					prime={prime}
					url={url}
				/>
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<PageProductMobile />
			</MediaQuery>
		</>
	);
	
}

export default PageProduct;
