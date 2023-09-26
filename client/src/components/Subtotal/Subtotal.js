import React from "react";
import MediaQuery from 'react-responsive'
import SubtotalDesktop from "./SubtotalDesktop/SubtotalDesktop";
import SubtotalMobile from "./SubtotalMobile/SubtotalMobile";


function Subtotal() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<SubtotalDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<SubtotalMobile />
			</MediaQuery>
		</>
	);
	
}

export default Subtotal;
