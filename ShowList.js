import React from 'react';
import Show from './Show';

const ShowList = (props) => {
	return (
		<div className='row'>
			{props.shows.map((show) => (
				<Show key={show.id} show={show} />
			))}
		</div>
	);
};

export default ShowList;
