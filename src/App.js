import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviItems from './components/MovieItems';

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://api.tvmaze.com/search/shows?q=all`;
		const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
		setMovies(responseJson);
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MoviItems movies={movies} />
			</div>
		</div>
	);
};

export default App;