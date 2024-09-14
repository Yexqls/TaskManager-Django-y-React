import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCarg } from "./TaskCarg";

export function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, []);

    return <div>
        {tasks.map(task => (
            <TaskCarg key={task.id} task={task} />

        ))}
    </div>;

}

