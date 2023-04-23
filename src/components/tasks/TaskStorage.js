import classes from './TaskStorage.module.css';
import Tasks from './Tasks';

const TaskStorage = () => {
    return (
      <div className={classes.wrapper}>
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    );
}

export default TaskStorage;