import React, {useState, useEffect} from 'react';
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import styles from './StepAvatar.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {setAvatar} from '../../../store/activateSlice'
import {activate} from '../../../http'
import {setAuth} from '../../../store/authSlice'
import Loader from '../../../components/shared/Loader/Loader'


const StepAvatar = ({ onNext }) => {

	const dispatch = useDispatch()

	const [unmounted, setUnmounted] = useState(0);
	const [loading, setLoading] = useState(0);
	const {name, avatar} = useSelector(state => state.activate)
	const [image, setImage] = useState('/images/monkey-avatar.png')

	async function submit() {
		if(!name || !avatar) return ;
		setLoading(true)
		try {
			const {data} = await activate({name, avatar})
			if(data.auth) {
				// check component unmount ?
				if(!unmounted) {
					dispatch(setAuth(data))
				}
			}
			console.log(data)
		} catch(err) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		return () => {
			setUnmounted(1)
		}
	}, [])

	function captureImage(e) {
		const file = e.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = function() {
			setImage(reader.result)
			dispatch(setAvatar(reader.result))
		}
	}

	if(loading) return <Loader message="Activation in progress..."/>

	return (
		<>
			<Card
				title={`Okay, ${name} ji`}
				icon="monkey-emoji"
			>
			<p className={styles.subHeading}>
				How's this photo?
			</p>
			<div className={styles.avatarWrapper}>
				<img className={styles.avatarImage} src={image} alt="Avatar"/>
			</div>
			<div>
				<input 
					onChange={captureImage}
					id="avatarInput" 
					type="file" 
					className={styles.avatarInput}
				/>
				<label className={styles.avatarLabel} htmlFor="avatarInput">Choose a different photo.</label>
			</div>
			<div>
				<Button onClick={submit} text="Next" />
			</div>
			</Card>
		</>
	);
};

export default StepAvatar;
