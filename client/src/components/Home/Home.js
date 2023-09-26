import React from "react";
import MediaQuery from 'react-responsive'
import HomeDesktop from "./HomeDesktop/HomeDesktop";
import HomeMobile from "./HomeMobile/HomeMobile";


function Home() {
	return(
		<>
			<MediaQuery minDeviceWidth={1025}>
				<HomeDesktop />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={1024}>
				<HomeMobile />
			</MediaQuery>
		</>
	);
	
}

export default Home;
