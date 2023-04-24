import { useEffect, useState } from 'react';
import classes from './Todo.module.css';
import TaskHeader from './taskHeader/TaskHeader';
import TaskStorage from './tasks/TaskStorage';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchHandler = async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/todos"
            );

            const data = await response.json();

            const taskDetails = data.slice(0, 3).map((task) => ({
              key: task.id,
              title: task.title,
              checked: task.completed,
            }));
            
            setTasks(taskDetails);
            
        }

        fetchHandler();
    }, []);

    const taskHandler = (title) => {
        const taskDetails = {
            key: Math.random().toString(),
            title: title,
            checked: false
        }
        console.log(taskDetails);
        setTasks(prevState => [taskDetails, ...prevState]);
    }

    const deleteHandler = (key) => {
        const updatedTask = tasks.filter(task => task.key !== key);
        setTasks(updatedTask);
    }
    return (
      <div className={classes.wrapper}>
        <TaskHeader onGetTaks={taskHandler} />
        <TaskStorage tasks={tasks} onDelete={deleteHandler} />
      </div>
    );
}

export default Todo;