import React from "react";
import MediaQuery from 'react-responsive'
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";


function Header() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<HeaderDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<HeaderMobile />
			</MediaQuery>
		</>
	);
	
}

export default Header;
