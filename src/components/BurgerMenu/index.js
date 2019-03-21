import React from 'react';
import styled from 'styled-components';

const BurgerMenuStyled = styled.div`
	/* position: absolute;
	top: 0;
	right: 0; */
	cursor: pointer;
	z-index: 10;

	div {
		width: 45px;
		height: 7px;
		background: black;
		margin: 6px 0;
		transition: 0.6s;
		border-radius: 20px;
	}

	&.transform .bar-one {
		transform: rotate(-45deg) translate(-10px, 7.5px);
	}

	&.transform .bar-two {
		opacity: 0;
	}

	&.transform .bar-three {
		transform: rotate(45deg) translate(-10px, -8.5px);	
	}
`;


const BurgerMenu = () => {

	const toggleMenu = () => {
		document.querySelector('#burger-menu').classList.toggle('transform');
		document.querySelector('#menu').classList.toggle('toggle-menu');
	}

	return (
		<BurgerMenuStyled onClick={toggleMenu} id="burger-menu">
			<div className="bar-one"></div>
			<div className="bar-two"></div>
			<div className="bar-three"></div>
		</BurgerMenuStyled>
	);
};

export default BurgerMenu;