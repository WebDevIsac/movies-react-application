import React from 'react';
import styled from 'styled-components';
import BurgerMenu from '../BurgerMenu';

const NavbarStyled = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;


const Navbar = () => {
	return (
		<NavbarStyled>
			<BurgerMenu/>
			<div id="menu">

			</div>
		</NavbarStyled>
	);
};

export default Navbar;