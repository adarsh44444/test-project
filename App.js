import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import ShowList from './components/ShowList';
import Show from './components/Show';

const App = () => {
	const [shows, setShows] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [selectedShow, setSelectedShow] = useState(null);

	const getShowRequest = async () => {
		const url = `https://api.tvmaze.com/search/shows?q=${searchValue}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.length > 0) {
			setShows(responseJson);
		}
	};

	useEffect(() => {
		getShowRequest();
	}, [searchValue]);

	const handleShowDetails = (show) => {
		setSelectedShow(show);
	};

	const handleBack = () => {
		setSelectedShow(null);
	};

	return (
		<div className='container-fluid movie-app'>
			{selectedShow ? (
				<div className='row'>
					<div className='col'>
						<h1>{selectedShow.name}</h1>
						<p>{selectedShow.summary}</p>
						<button className='btn btn-primary' onClick={handleBack}>
							Back
						</button>
					</div>
				</div>
			) : (
				<div className='row'>
					<MovieListHeading heading='Shows' />
					<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
				<div className='row'>
					<ShowList shows={shows} onShowDetails={handleShowDetails} />
				</div>
			)}
