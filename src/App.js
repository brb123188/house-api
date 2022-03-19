import React, { Component } from 'react';
import Ui from '../src/Components/Ui';
import AddHouse from '../src/Components//AddHouse';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<div>
				<div className='title-bar'>
					<h1 className='title'>Future Home List</h1>
				</div>
				<div>
					<Ui/>
				</div>
				<div>
					<AddHouse />
				</div>
			</div>
		);
	}
}

export default App;

