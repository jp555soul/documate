import React from 'react';

export default class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.socket = this.props.socket;
	}

	createMatch = async() => {
		this.socket.emit('createMatch');
		this.socket.on('matchCreated', match => {
			this.props.setActiveMatch(match)
		});
		this.props.updateView('Board');
	}

	render(){
		return(
			<div id='menu'>
				<h1>Battleship</h1>
				<button className='menuBtn' onClick={() => this.createMatch()} style={{marginTop: 20}}>Create Match</button><br></br>
				<button className='menuBtn' onClick={() => this.props.requestMatch()}>Join Match</button><br></br>
				<button className='menuBtn'>Help</button><br></br>
			</div>
		);
	}
}