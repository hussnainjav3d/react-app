import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dinner from './dinner';
import Lunch from './lunch';

function App() {
	return (
		<div className="App">
			<Dinner dishName="Chicken Krahi" sweetDish="Kheer" />
			<hr />
			<Dinner dishName="Beef Kabab" sweetDish="Russian Salad" />
			<hr />
			<Dinner dishName="Pizza" sweetDish="Gulab Jaman" />
			<hr />
			<Lunch />
		</div>
	);
}

export default App;
