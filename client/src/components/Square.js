import React from 'react'

export default class Square extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
	    const isTop = this.props.coord.charAt(0) === 'A';
	    const isLeft = this.props.coord.split(this.props.coord.charAt(0))[1] === '1';
		
		return(
			<div>
				{isTop && <p>{this.props.coord.split(this.props.coord.charAt(0))}</p>}    
				<div style={{ display: 'flex' }}>
	                    {isLeft && <span>{this.props.coord.charAt(0)}</span>}
	                    <button style={{ backgroundColor: 'white', opacity: 0.8, width: '3vw', height: '3vw', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}
	                    onClick={() => console.log(this.props.player + " - " + this.props.coord)}>
	                    </button>
	            </div>
			</div>
		);
	}
}