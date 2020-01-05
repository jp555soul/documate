const connectDB = require('./config/db')
const app = require('express')()
const io = require('socket.io').listen(app.listen(5050))

connectDB()

let matches = {}
let players = {}
let matchvars = 1000;

app.get('/test', (req, res) => {
	res.sendFile(__dirname + '/test.html')
})

io.on('connection', socket => {
	console.log('User connected')

	socket.on('disconnect', () => {
		socket.leaveAll()
		console.log('User disconnected')
	})

	socket.on('getMatches', () => {
		socket.emit('returnMatches', matches)
	})

	socket.on('joinMatch', match => {
		console.log('joinMatch - match: ', match )
		console.log('joinMatch - matches: ', matches )
		if(matches.hasOwnProperty(match)){
			if(matches[match].length < 2){
				socket.join(match)
				matches = io.sockets.adapter.rooms
				//players[match][socket.id] = false
				io.in(match).emit('matchUpdate', matches[match])
				io.emit('returnMatches', matches)
			} else {
				console.log('joinError', 'Match full. Please wait.')
			}
		} else {
			console.log('joinError', 'Room does not exist.')
		}
	})

	socket.on('createMatch', () => {
		if(!matches.hasOwnProperty(matchvars)){
			//socket.emit('getMatchInfo', matchvars)
			socket.join(matchvars)
			socket.emit('matchCreated', matchvars)
			matches = io.sockets.adapter.rooms
			// players[matchvars] = {}
			// players[matchvars][socket.id] = false
			matchvars++
			io.emit('returnMatches', matches)
		} else {
			socket.emit('createError', 'Match already in progress.')
		}
	})
})
