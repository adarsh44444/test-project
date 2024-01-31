import React from 'react';

const Show = (props) => {
	return (
		<div className='col-md-4'>
			<div className='card'>
				<img className='card-img-top' src={props.show.image.medium} alt={props.show.name} />
				<div className='card-body'>
					<h5 className='card-title'>{props.show.name}</h5>
					<p className='card-text'>{props.show.summary.substring(0, 100)}...</p>
					<button className='btn btn-primary' onClick={() => props.onShowDetails(props.show)}>
						Show Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Show;
