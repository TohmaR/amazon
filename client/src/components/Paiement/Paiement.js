import React from "react";
import MediaQuery from 'react-responsive'
import PaiementDesktop from "./PaiementDesktop/PaiementDesktop";
import PaiementMobile from "./PaiementMobile/PaiementMobile";


function Paiement() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<PaiementDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<PaiementMobile />
			</MediaQuery>
		</>
	);
	
}

export default Paiement;
