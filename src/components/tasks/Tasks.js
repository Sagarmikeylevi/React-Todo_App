import classes from './Tasks.module.css';
import {FaCheck, FaTrash} from 'react-icons/fa';

const Tasks = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.checkBox}>
                <FaCheck className={classes.check} />
            </div>

            <p>Complete the react project</p>

            <FaTrash className={classes.delete} />
        </div>
    )
}

export default Tasks;