import React from 'react'
import styles from './RoomCard.module.css'
import {useHistory} from 'react-router-dom'


const RoomCard = ({room}) => {

	const history = useHistory()

	return (
		<div  onClick={() => history.push(`/room/${room.id}`)} className={styles.card}>
			<h3 className={styles.cardTopic}>{room.topic}</h3>
			<div className={`${styles.speakers} ${room.speakers.length===1 ? styles.singleSpeaker : ''}`}>
				<div className={styles.avatars}>
					{room.speakers.map(speaker => (
						<img key={speaker.id} src={speaker.avatar} alt="speaker-avatar"/>
					))}
				</div>
				<div className={styles.names}>
					{room.speakers.map(speaker => (
						<div className={styles.nameWrapper}>
							<span>{speaker.name}</span>
							<img key={speaker.id} src="/images/chat-bubble.png" />
						</div>
					))}
				</div>
			</div>
			<div className={styles.peopleCount}>
				<span>{room.totalPeople}</span>
				<img src="/images/user-icon.png"/>
			</div>
		</div>
	)
}

export default RoomCard
