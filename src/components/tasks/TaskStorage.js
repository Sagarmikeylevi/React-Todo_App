import classes from "./TaskStorage.module.css";
import Tasks from "./Tasks";

const TaskStorage = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.tasks.map((task) => {
        return (
          <Tasks key={task.key} title={task.title} checked={task.checked} />
        );
      })}
    </div>
  );
};

export default TaskStorage;
