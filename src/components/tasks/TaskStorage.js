import classes from "./TaskStorage.module.css"; // Import CSS module styles
import Tasks from "./Tasks"; // Import Tasks component

// Define TaskStorage functional component
const TaskStorage = (props) => {
  return (
    <div className={classes.wrapper}>
      {" "}
      {/* Render a div container with CSS class */}
      {props.tasks.map((task) => {
        // Map through the tasks array
        return (
          <Tasks
            key={task.key} // Set a unique key for each task
            title={task.title} // Pass the task title as a prop to Tasks component
            checked={task.checked} // Pass the task checked state as a prop to Tasks component
            onDelete={() => props.onDelete(task.key)} // Pass a callback function to Tasks component to handle task deletion
          />
        );
      })}
    </div>
  );
};

export default TaskStorage; // Export TaskStorage component as default
