import React from 'react';

export default class MatchList extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.socket = this.props.socket;
	}

	joinMatch = toMatch =>{
		let match = parseInt(toMatch, 10);
		this.socket.emit('joinMatch', match);
		this.props.setActiveMatch(match);
		this.props.updateView('Board');
	}

	render(){
		return(
			<div id="matchContainer">
				<table id="matchList">
					<tbody>
						<tr>
							<td>Match ID</td>
							<td>Players</td>
							<td>Join</td>
						</tr>
						{this.props.matches.map(match => {
							const key = Object.keys(match) // maps roomID
							const full = match[key].length === 2;
							return(
								<tr>
									<td>{key}</td>
									<td>{match[key].length + "/2"}</td>
									<td>
										<button onClick={() => this.joinMatch(key)} className='tableBtn' disabled={full}>{full ? 'MATCH FULL' : 'JOIN'}</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<div>
					<button className='tableBtn' style={{ marginLeft: '55vw', marginRight: '3vw' }} onClick={() => this.props.updateView('Menu')}>Back</button>
					<button className='tableBtn' style={{ marginRight: 0 }} onClick={() => this.props.refresh()}>Refresh</button>
				</div>
			</div>
		);
	}
}