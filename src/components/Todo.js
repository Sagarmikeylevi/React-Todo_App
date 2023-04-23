import { useEffect, useState } from 'react';
import classes from './Todo.module.css';
import TaskHeader from './taskHeader/TaskHeader';
import TaskStorage from './tasks/TaskStorage';

const Todo = () => {
    const [task, setTask] = useState([]);
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
            
            setTask(taskDetails);
            
        }

        fetchHandler();
    }, []);
    return (
        <div className={classes.wrapper}>
            <TaskHeader />
            <TaskStorage tasks={task} />
        </div>
    )
}

export default Todo;