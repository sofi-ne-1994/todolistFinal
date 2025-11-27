import { useEffect, useState } from "react";
import { getTasks, deleteTask, toggleTask } from "../api";
import TaskList from "../components/TaskList";




export default function Dashboard(){
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => { 
        loadTasks();
    }, []);

    
    async function loadTasks() {
        const data = await getTasks();
        setTasks(data);
    }

    async function handleDelete(id) {
        await deleteTask(id);
        loadTasks();
    }

    async function handleToggle(id, currentState) {
        await toggleTask(id, currentState);
        loadTasks();
    }


    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );        
        

    return(
        <div className="page-container">
            <div className="main-card">
                <h1>Mis tareas</h1>
                <input className="search-box"
                    placeholder="Buscar tarea..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <TaskList tasks={filtered} onDelete={handleDelete} onToggle={handleToggle} />
            </div>
        </div>
    );
}