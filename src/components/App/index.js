import React, { Component } from 'react';
import styled from 'styled-components';
import Movies from '../Movies';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Modal from '../Modal';


const AppStyled = styled.div`
	color: black;

	padding-top: 100px;
	text-align: center;
`;

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

class App extends Component {
	state = {
		movies: [],
		categories: [],
		fetched: false,
		inputValue: "",
		category: "",
		fetchType: ""
	}

	componentDidMount() {
		const apiPopularity = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;
		fetch(apiPopularity)
			.then(response => response.json())
			.then(data => {
				this.setState({
					movies: data,
					fetched: true,
					fetchType: "Popular Movies"
				});
			});

		const apiCategories = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
		fetch(apiCategories)
			.then(response => response.json())
			.then(data => {
				this.setState({
					categories: data.genres
				});
			});
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
					fetchType: `Searched: ${this.state.inputValue}`
				});
			});
	}

	handleCategory = (e) => {
		const categoryId = e.target.dataset.id;
		const categoryName = e.target.dataset.name;
		const apiCategory = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${categoryId}`;
		fetch(apiCategory)
			.then(response => response.json())
			.then(data => {
				this.setState({
					movies: data,
					fetchType: `Category: ${categoryName}`
				})
			});
				document.querySelector('#burger-menu').classList.toggle('transform');
				document.querySelector('#modal').classList.toggle('toggle-modal');
	}


		render() {
			return (
				<AppStyled>
					<Modal>
						<div>
							{this.state.categories.map((category, index) => {
								return <h3 onClick={this.handleCategory} key={index} data-id={category.id} data-name={category.name}>{category.name}</h3>
							})}
						</div>
					</Modal>
					<h2>{this.state.fetchType}</h2>
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
