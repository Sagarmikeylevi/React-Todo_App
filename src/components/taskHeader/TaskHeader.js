// Importing the `useState` hook and the CSS module
import { useState } from "react";
import classes from "./TaskHeader.module.css";

// TaskHeader functional component that receives props
const TaskHeader = (props) => {
  // Setting initial state for the task title and empty state
  const [title, setTitle] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  // Handling input change
  const inputhandler = (event) => {
    setIsEmpty(false);
    setTitle(event.target.value);
  };

  // Handling form submission
  const submithandler = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    props.onGetTaks(title);
    setTitle("");
  };

  // Returning the JSX for the component
  return (
    <div className={classes.wrapper}>
      <p>What's on your mind?</p>
      <form onSubmit={submithandler}>
        <div className={classes.addTaskBar}>
          <input
            type="text"
            placeholder="Add a task"
            value={title}
            onChange={inputhandler}
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
      {/* Showing an error message if task is empty */}
      {isEmpty && (
        <h1 className={classes.emptyState}>Please enter something...</h1>
      )}
    </div>
  );
};

// Exporting the component
export default TaskHeader;
