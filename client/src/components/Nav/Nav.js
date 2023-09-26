import React from "react";
import MediaQuery from 'react-responsive'
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";


function Nav() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<NavDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<NavMobile />
			</MediaQuery>
		</>
	);
	
}

export default Nav;
