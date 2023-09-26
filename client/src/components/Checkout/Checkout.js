import React from "react";
import MediaQuery from 'react-responsive'
import CheckoutDesktop from "./CheckoutDesktop/CheckoutDesktop";
import CheckoutMobile from "./CheckoutMobile/CheckoutMobile";


function Checkout() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<CheckoutDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<CheckoutMobile />
			</MediaQuery>
		</>
	);
	
}

export default Checkout;
