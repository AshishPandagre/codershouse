require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const server = require('http').createServer(app)
const ACTIONS = require('./actions')


const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST']
	}
})

app.use(cookieParser())
const corsOption = {
	credentials: true,
	origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use('/storage', express.static('storage'))

const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json({limit: '8mb'}));
app.use(router);

app.get('/', (req, res) => {
	res.send('Hello from express Js');
});


// dealing with sockets

const socketUserMapping = {

}

io.on('connection', (socket) => {
	console.log('new connection', socket.id)

	socket.on(ACTIONS.JOIN, ({roomId, user}) => {
		socketUserMapping[socket.id] = user
		const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || [])
		clients.forEach(clientId => {
			io.to(clientId).emit(ACTIONS.ADD_PEER, {
				peerId: socket.id,
				createOffer: false,
				user: user
			})
		})
		socket.emit(ACTIONS.ADD_PEER, {
			peerId: clientId,
			createOffer: true,
			user: socketUserMapping[clientId]
		})
		socket.join(roomId)
	})

	// handle relay-ice
	socket.on(ACTIONS.RELAY_ICE, ({peerId, iceCandidate}) => {
		io.to(peerId).emit(ACTIONS.RELAY_ICE, {
			peerId: socket.id,
			iceCandidate
		})
	})

	// handle relay-sdp (session description)
	socket.on(ACTIONS.RELAY_SDP, ({peerId, sessionDescription}) => {
		io.to(peerId)..emit(ACTIONS.RELAY_SDP, {
			peerId: socket.id,
			sessionDescription
		})
	})

})


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
