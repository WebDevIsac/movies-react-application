import React from 'react';
import styled from 'styled-components';

const MovieStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 8px 8px 16px 6px grey;
	margin: 20px 0;

	img {
		width: 100%;
		
	}

	h2 {
		text-align: center;
		margin: 20px 10px 0 10px;
	}

	p {
		text-align: left;
		margin: 16px 10px;
	}

`;

const Movie = ({movieData}) => {
	const imageSource = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieData.poster_path}`;
	return (
		<MovieStyled>
			<img src={imageSource} alt="movie poster"></img>
			<h2>{movieData.title}</h2>
			<p>{movieData.overview}</p>
		</MovieStyled>
	);
};

export default Movie;