import React from 'react';
import Movie from '../Movie';
import styled from 'styled-components';

const MoviesStyled = styled.div`
	display: flex; 
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 10px 40px 0 40px;
`;

const Movies = (props) => {
	return (
		<MoviesStyled>
			{
				props.fetched && props.moviesData.results.map((movie, index) => {
					return <Movie movieData={movie} key={index}/>
				})
			}
		</MoviesStyled>
	);
};

export default Movies;