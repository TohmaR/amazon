import React from "react";
import MediaQuery from 'react-responsive'
import CheckoutProductDesktop from "./CheckoutProductDesktop/CheckoutProductDesktop";
import CheckoutProductMobile from "./CheckoutProductMobile/CheckoutProductMobile";


function CheckoutProduct({ id, image, title, price}) {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<CheckoutProductDesktop id={id} image={image} title={title} price={price}/>
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<CheckoutProductMobile id={id} image={image} title={title} price={price}/>
			</MediaQuery>
		</>
	);
	
}

export default CheckoutProduct;
