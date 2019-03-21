import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import styled from 'styled-components';

const HeaderStyled = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: lightsalmon;
	width: 100%;
	height: 80px;
	padding: 0 20px;
`;


const Header = () => {
	return (
		<HeaderStyled>
			<Logo/>
			<Navbar/>
		</HeaderStyled>
	);
}

export default Header;