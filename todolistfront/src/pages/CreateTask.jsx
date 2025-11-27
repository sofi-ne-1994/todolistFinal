import TaskForm from "../components/TaskForm";

export default function CreateTask(){
    return(
        <div className="page-container">
            <div className="main-card">
                <h1>Crear tarea</h1>
                <TaskForm />
            </div>
        </div>
    );
}