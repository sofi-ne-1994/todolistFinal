import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" }
})

export async function getTasks(){
    const response = await api.get("/");
    return response.data;
}

export async function createTasks(task){
    const response = await api.post("/", task);
    return response.data;
}

export async function deleteTask(id) {
    await api.delete(`/${id}/`); 
    
}

export async function toggleTask(id, currentState) {
    const response = await api.patch(`/${id}/`, {
        completed: !currentState
    });
    return response.data;    
}