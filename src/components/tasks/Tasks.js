import { useState } from 'react';
import classes from './Tasks.module.css';
import {FaCheck, FaTrash} from 'react-icons/fa';

const Tasks = () => {
    const [isChecked, setIsChecked] = useState(false);

    const checkedTaskHandler = () => {
        setIsChecked(prevState => {
            if(prevState) return false;
            return true;
        });
    }

    const isCheckedBar = `${classes.checkBox} ${
      !isChecked ? "" : classes.checkedBox
    }`;

    const isCheckedTask = `${classes.check} ${!isChecked ? "" : classes.checked}`;

    const isCheckedPara = `${!isChecked ? "" : classes.checkedPara}`;
    return (
      <div className={classes.wrapper}>
        <div className={isCheckedBar} onClick={checkedTaskHandler}>
          <FaCheck className={isCheckedTask} />
        </div>

        <p className={isCheckedPara}>Complete the react project</p>

        <FaTrash className={classes.delete} />
      </div>
    );
}

export default Tasks;