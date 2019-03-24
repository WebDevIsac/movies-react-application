import styled from 'styled-components';
import React from 'react';

const ModalStyled = styled.div`
	position: sticky;
	top: 0;
	margin-top: -100px;
	height: 100vh;
	width: 100vw;
	background: lightgrey;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 100px 0 100px 0;
	color: white;

	&.toggle-modal {
		display: none;
	}

	> div {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px 25px;
	}

	> div div {
		cursor: pointer;
	}
`;

const Modal = ({children}) => {
	return (
			<ModalStyled id="modal" className="toggle-modal">
				<h2>Choose Category</h2>
				{children}
			</ModalStyled>
	);
}

export default Modal;