import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
	{
		title: 'What is react?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'why use react?',
		content: 'React is a favorite Js library',
	},
	{
		title: 'How do you use React?',
		content: 'you use React by creating Component',
	},
];

const options = [
	{
		label: 'The color red',
		value: 'red',
	},
	{
		label: 'The color green',
		value: 'green',
	},
	{
		label: 'The shade of blue',
		value: 'blue',
	},
];

const App = () => {
	return (
		<div>
			<Translate />
		</div>
	);
};

export default App;
