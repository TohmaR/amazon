import React from "react";
import MediaQuery from 'react-responsive'
import FooterDesktop from "./FooterDesktop/FooterDesktop";
import FooterMobile from "./FooterMobile/FooterMobile";


function Footer() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<FooterDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<FooterMobile />
			</MediaQuery>
		</>
	);
	
}

export default Footer;
