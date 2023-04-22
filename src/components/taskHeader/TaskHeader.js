import classes from './TaskHeader.module.css';

const TaskHeader = () => {
    return (
      <div className={classes.wrapper}>
        <p>What's on your mind?</p>
        <div className={classes.addTaskBar}>
            <input type='text' placeholder='Add a tasks' />
            <button type='submit'>Add Task</button>
        </div>
      </div>
    );
}

export default TaskHeader;