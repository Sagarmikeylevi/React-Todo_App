import { useState } from "react";
import classes from "./TaskHeader.module.css";

const TaskHeader = (props) => {
  const [title, setTitle] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const inputhandler = (event) => {
    setIsEmpty(false);
    setTitle(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    props.onGetTaks(title);
    setTitle('');
  };

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
      {isEmpty && (
        <h1 className={classes.emptyState}>Please enter something...</h1>
      )}
    </div>
  );
};

export default TaskHeader;
