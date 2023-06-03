import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import "../footer.css";


const SocialIcons = () => {
	return (
		<>
			<a href="https://www.facebook.com/PUMAArgentina/?locale=es_LA" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faFacebook} className="redes" />
			</a>
			<a href="https://www.instagram.com/pumaargentina/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faInstagram} className="redes" />
			</a>
			
		</>
	);
};

export default SocialIcons;