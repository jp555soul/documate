import React from 'react';
import Player1Board from '../components/Player1Board';
import Player2Board from '../components/Player2Board';

export default class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.socket = this.props.socket;
	}

	render(){
		return(
			<div>
				<div id='board'>
					<Player1Board />
					<Player2Board />
				</div>
				<button className='backBtn' onClick={() => this.props.updateView('Menu')}>Back</button>
			</div>
		);
	}
}