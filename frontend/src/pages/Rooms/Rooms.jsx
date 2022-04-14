import React, {useState, useEffect} from 'react';
import styles from './Rooms.module.css'
import RoomCard from '../../components/RoomCard/RoomCard'
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal'
import {getAllRooms} from '../../http'


const rooms = [
	{
		id: 1,
		topic: 'Which framework best for frontend ?',
		speakers: [
			{
				id: 1,
				name: 'John Doe',
				avatar: '/images/monkey-avatar.png',
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar: '/images/monkey-avatar.png',
			},
		],
		totalPeople: 40,
	},
	{
		id: 3,
		topic: 'What’s new in machine learning?',
		speakers: [
			{
				id: 1,
				name: 'John Doe',
				avatar: '/images/monkey-avatar.png',
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar: '/images/monkey-avatar.png',
			},
		],
		totalPeople: 40,
	},
	{
		id: 4,
		topic: 'Why people use stack overflow?',
		speakers: [
			{
				id: 1,
				name: 'John Doe',
				avatar: '/images/monkey-avatar.png',
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar: '/images/monkey-avatar.png',
			},
		],
		totalPeople: 40,
	},
	{
		id: 5,
		topic: 'Artificial inteligence is the future?',
		speakers: [
			{
				id: 1,
				name: 'John Doe',
				avatar: '/images/monkey-avatar.png',
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar: '/images/monkey-avatar.png',
			},
		],
		totalPeople: 40,
	},
];

const Rooms = () => {

	const [showModal, setShowModal] = useState(false)
	const [rooms, setRooms] = useState([])

	useEffect(() => {
		const fetchRooms = async () => {
			const {data} = await getAllRooms()
			setRooms(data)
		}
		fetchRooms()
	}, [])

	function openModal() {
		setShowModal(true)
	}

	function onClose() {
		setShowModal(false)
	}

	return <>
		<div className="container">
			<div className={styles.roomsheader}>
				<div className={styles.left}>
					<span className={styles.heading}>All voice rooms</span>
					<div className={styles.searchBox}>
						<img src="/images/search-icon.png"/>
						<input type="text" className={styles.searchInput} />
					</div>
				</div>
				<div className={styles.right}>
					<button className={styles.startRoomButton} onClick={openModal}>
						<img src="/images/add-room-icon.png" alt="add room"/>
						<span>Start a room</span>
					</button>
				</div>
			</div>

			<div className={styles.roomList}>
				{rooms.map(room => (
					<RoomCard room={room} key={room.id}/>
				))}
			</div>

		</div>
		{showModal && <AddRoomModal onClose={onClose}/>}
	</>;
};

export default Rooms;
