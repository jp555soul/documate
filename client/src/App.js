import * as io from 'socket.io-client';
import React, { Component } from 'react';
import './App.css';
import Menu from './views/Menu';
import MatchList from './views/MatchList';
import Board from './views/Board';

class App extends Component {
   constructor(props){
     super(props);
     this.state = {
        server:'localhost:5050', 
        view: 'Menu', 
        matches:[], 
        activeMatch:0
      };
      this.matches = {};
   }

    setupBeforeUnloadListener = () => {
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            return socket.emit('leaveMatch', this.state.activeMatch);
        });
    };

    componentDidMount = () => {
        this.setupBeforeUnloadListener()
    }

   requestMatch = () =>  {
     socket.emit('getMatches');
     socket.on('returnMatches', matches => {
       	const matchList = []
				Object.keys(matches).forEach(key => {
					let json = {}
					if(!isNaN(key)) { // if room is actually a game room and not a socket
						json[key] = matches[key]
						matchList.push(json)
					}
				})
       this.setState({
         matches:matchList
       })
      })
      this.setState({
        view: 'MatchList'
      })
    }

   updateView = view => {
     this.setState({
       view: view
     })
   }

   setActiveMatch = async match => {
     this.setState({
       activeMatch: match
     })
   }

   getView(view) {
     switch(view){
       case 'Menu':
         return <Menu updateView={this.updateView} socket={socket} setActiveMatch={this.setActiveMatch} requestMatch={this.requestMatch}  />;
       case 'MatchList':
         return <MatchList updateView={this.updateView} socket={socket} matches={this.state.matches} refresh={this.requestMatch} setActiveMatch={this.setActiveMatch}/>;
       case 'Board':
         return <Board updateView={this.updateView} socket={socket} match={this.state.activeMatch} />;
       default:
         return null;
      }
   }

	render(){
     console.log(this.state)
     return(
       <div id='container'>
          {this.getView(this.state.view)} 
       </div>
     )
  }
}

export default App;
const socket = io('http://localhost:5050')
