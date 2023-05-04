// Import the useState hook from React
import { useState } from "react";

// Import CSS modules and icons
import classes from "./Tasks.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";

// Define the Tasks component
const Tasks = (props) => {
  // Use the useState hook to create a state variable isChecked
  // and a function setIsChecked to update it
  const [isChecked, setIsChecked] = useState(false);

  // Define a function to handle the click event when the checkbox is clicked
  const checkedTaskHandler = () => {
    setIsChecked((prevState) => {
      // If the checkbox is already checked, uncheck it
      if (prevState) return false;
      // Otherwise, check it
      return true;
    });
  };

  // Define CSS classes for the checkbox, checkmark, and task text
  const isCheckedBar = `${classes.checkBox} ${
    // If the checkbox is not checked, leave the class empty
    !isChecked ? "" : classes.checkedBox
  }`;
  const isCheckedTask = `${classes.check} ${
    // If the checkbox is not checked, leave the class empty
    !isChecked ? "" : classes.checked
  }`;
  const isCheckedPara = `${!isChecked ? "" : classes.checkedPara}`;

  // Render the Tasks component
  return (
    <div className={classes.wrapper}>
      {/* Render the checkbox */}
      <div className={isCheckedBar} onClick={checkedTaskHandler}>
        <FaCheck className={isCheckedTask} />
      </div>

      {/* Render the task text */}
      <p className={isCheckedPara}>{props.title}</p>

      {/* Render the delete icon */}
      <FaTrash className={classes.delete} onClick={() => props.onDelete()} />
    </div>
  );
};

// Export the Tasks component as the default export
export default Tasks;
