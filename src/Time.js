import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

const red = '#d92314';
const green = '#3c913d';

function Timer() {

    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
        
        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    function initTimer() {
        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            console.log('int');
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current == 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const total = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentText = Math.round(secondsLeft / total * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) {seconds = '0' + seconds;}

    return (
        <div>
            <CircularProgressbar 
                value={percentText} 
                text={minutes + ':' + seconds} 
                styles={buildStyles({
                    textColor:'#fff',
                    pathColor: mode === 'work' ? red : green,
                    tailColor:'#b8bab8',
            })} />
            <div style={{marginTop:'20 px'}}>
                {isPaused 
                ? <PlayButton onClick = {() => {setIsPaused(false); isPausedRef.current = false}} />
                : <PauseButton onClick = {() => {setIsPaused(true); isPausedRef.current = true}} />}
            </div>
            <div style={{marginTop:'20 px'}}>
                <SettingsButton onClick = {() => settingsInfo.setShowSettings(true)}/>
            </div>
        </div>
    );
}

export default Timer;