import React from 'react';
import styled from 'styled-components';

const SearchBarStyled = styled.div`
	position: fixed;
	bottom: 15px;
	left: 50%;
	margin-left: -150px;
	width: 300px;
	height: 45px;
	background: lightsalmon;
	opacity: 0.8;
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	input {
		/* width: 75%; */
		height: 100%;
		border: none;
		background-image: none;
		background-color: transparent;
		box-shadow: none;
		outline: none;
		border-radius: 20px;
		font-size: 20px;
	}

	input:focus {
		border: none;
	}

	input::placeholder {
		color: black;
	}

	div {
		margin-left: -20px;
	}
`;

const SearchBar = ({children}) => {
	
	return (
		<SearchBarStyled>
			{children}
		</SearchBarStyled>
	);
};

export default SearchBar;