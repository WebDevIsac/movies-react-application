import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.div`
	color: black;
	text-decoration: none;
	font-size: 30px;
	font-weight: bold;
`;

const handleClick = () => {
	const start = document.querySelector('#start');
	start.scrollIntoView({block: "start"})
	window.location.reload();
}


const Logo = () => {
	return (
		<LogoStyled onClick={handleClick}>
			MovieDB
		</LogoStyled>
	);
};

export default Logo;