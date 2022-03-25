import React, {useState} from 'react';
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import {useDispatch, useSelector} from 'react-redux'
import {setName} from '../../../store/activateSlice'
import styles from './StepName.module.css'


const StepName = ({ onNext }) => {
    const {name} = useSelector(state => state.activate)
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState(name);

    function nextStep() {
        if(!fullName) {
            return;
        }
        dispatch(setName(fullName)) 
        onNext()
    }

    return (
        <Card
            title="what's your full name?"
            icon="google-emoji"
        >
            <TextInput
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <p className={styles.paragraph}>
                People use real names at codershouse :)
            </p>
            <div>
                <Button onClick={nextStep} text="Next" />
            </div>
        </Card>
    );
};

export default StepName;
