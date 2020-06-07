import React from 'react';

function Dinner(props) {
	return (
		<div>
			<h1>We are serving {props.dishName}</h1>
			<h2>Today we server {props.sweetDish} too</h2>
		</div>
	);
}
export default Dinner;
