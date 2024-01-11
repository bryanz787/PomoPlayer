import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';

const red = '#d92314';
const green = '#3c913d';

function Timer() {
    return (
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor:'#fff',
                pathColor: red,
                tailColor:'#b8bab8',
            })} />
            <div style={{marginTop:'20 px'}}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop:'20 px'}}>
                <SettingsButton />
            </div>
        </div>
    );
}

export default Timer;