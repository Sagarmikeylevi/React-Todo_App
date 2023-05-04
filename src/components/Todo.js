import { useEffect, useState } from "react";
import classes from "./Todo.module.css";
import TaskHeader from "./taskHeader/TaskHeader";
import TaskStorage from "./tasks/TaskStorage";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from an API endpoint when the component mounts
  useEffect(() => {
    const fetchHandler = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch task data");
        }

        const data = await response.json();

        // Extract relevant information from the fetched data and set it in the state
        const taskDetails = data.slice(0, 3).map((task) => ({
          key: task.id,
          title: task.title,
          checked: task.completed,
        }));

        setTasks(taskDetails);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchHandler();
  }, []);

  // Handle creating a new task
  const taskHandler = async (title) => {
    const taskDetails = {
      key: Math.random().toString(),
      title: title,
      checked: false,
    };

    // Update the state to include the new task
    setTasks((prevState) => [taskDetails, ...prevState]);

    // Example of how to make a POST request to an API endpoint
    // try {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         title: taskDetails.title,
    //         completed: taskDetails.checked,
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   );

    //   const data = await response.json();
    //   return {
    //     success: true,
    //     data,
    //   };
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Handle deleting a task
  const deleteHandler = async (key) => {
    // Update the state to remove the deleted task
    const updatedTask = tasks.filter((task) => task.key !== key);
    setTasks(updatedTask);

    // Example of how to make a DELETE request to an API endpoint
    // try {
    //   await fetch("https://jsonplaceholder.typicode.com/todos" + `/${key}`, {
    //     method: "DELETE",
    //   });
    //   return {
    //     success: true,
    //   };
    // } catch (error) {
    //   return {
    //     success: false,
    //     message: error.message,
    //   };
    // }
  };

  // Render loading state
  if (isLoading) {
    return (
      <section className={classes.loadingstate}>
        <p>Loading...</p>
      </section>
    );
  }

  // Render error state
  if (error) {
    return (
      <section className={classes.errorstate}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <div className={classes.wrapper}>
      <TaskHeader onGetTaks={taskHandler} />
      <TaskStorage tasks={tasks} onDelete={deleteHandler} />
    </div>
  );
};

export default Todo;
