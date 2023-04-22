import classes from './Todo.module.css';
import TaskHeader from './taskHeader/TaskHeader';
import TaskStorage from './tasks/TaskStorage';

const Todo = () => {
    return (
        <div className={classes.wrapper}>
            <TaskHeader />
            <TaskStorage />
        </div>
    )
}

export default Todo;