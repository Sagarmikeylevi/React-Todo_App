import { useEffect, useState } from "react";
import classes from "./Todo.module.css";
import TaskHeader from "./taskHeader/TaskHeader";
import TaskStorage from "./tasks/TaskStorage";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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


  const taskHandler = async (title) => {
    const taskDetails = {
      key: Math.random().toString(),
      title: title,
      checked: false,
    };

    setTasks((prevState) => [taskDetails, ...prevState]);

    // --- demo post req ----
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

  const deleteHandler = async (key) => {
    const updatedTask = tasks.filter((task) => task.key !== key);
    setTasks(updatedTask);

    // --- demo delete req --- 
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

  if (isLoading) {
    return (
      <section className={classes.loadingstate}>
        <p>Loading...</p>
      </section>
    );
  }



  if(error) {
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
