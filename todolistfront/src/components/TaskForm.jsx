 //onChange → cada vez que escribís:actualiza el estado title | React vuelve a renderizar
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createTasks} from "../api";


export default function TaskForm(){
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState ("");
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();

        await createTasks({
            title,
            description,
            completed
        });

        navigate ("/");

    }







    return(
       <form onSubmit={handleSubmit}>

            <input
                placeholder="Título"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ padding: "10px", width: "400px", display: "block", marginBottom: "20px" }}
            />

            <textarea
                placeholder="Descripción"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ padding: "10px", width: "400px", height: "100px", display: "block", marginBottom: "20px" }}
            />
            <button className="btn btn-primary">Crear tarea</button>
        </form> 
    );
}