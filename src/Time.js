import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';

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
            <div>
                <PlayButton />
            </div>
        </div>
    );
}

export default Timer;