import React, { Component } from 'react';
import styled from 'styled-components';
import Movies from '../Movies';
import Header from '../Header';
import SearchBar from '../SearchBar';

const AppStyled = styled.div`
	color: black;
`;

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

class App extends Component {
	state = {
		movies: [],
		fetched: false,
		inputValue: ""
	}

	handleInput = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	}

	handleSearch = () => {
		const searchValue = this.state.inputValue;
		const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&query=${searchValue}`;
		fetch(apiSearchMovie)
			.then(response => response.json())
			.then(data => {
				this.setState({
					movies: data,
					fetched: true
				});
			});
	}



	// componentDidMount() {
	// 	// const api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=action`;
	// 	const apiWithGenre = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
	// 	fetch(apiWithGenre)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState({
	// 				movies: data
	// 			});
	// 		});
	// }

	render() {
		return (
			<AppStyled>
				<Header/>
				<Movies moviesData={this.state.movies} fetched={this.state.fetched}/>
				<SearchBar>
					<input onChange={this.handleInput} type="text" id="search" name="search" placeholder="Search Input..." autoComplete="off" value={this.state.inputValue}></input>
					<div onClick={this.handleSearch}>
						<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
						strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
						<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
					</div>
				</SearchBar>
			</AppStyled>
		);
	}
}

export default App;
