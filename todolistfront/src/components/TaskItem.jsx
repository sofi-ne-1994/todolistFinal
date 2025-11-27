//representa una tarea individual con checkbox y botón de eliminar.
export default function TaskItem({task, onDelete, onToggle}){
    return(
        <li className={`task-item ${task.completed ? "completed" : ""}`}> 

            <div className="task-header">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id, task.completed)}
                />

                <strong className={`task-title ${task.completed ? "completed" : ""}`}>
                    {task.title}
                </strong>
            </div>

            {task.description && (
                <p className="task-description">{task.description}</p>
            )}

            <p className="task-date">
                Creada: {new Date(task.created_at).toLocaleString()}
            </p>

            <button className="btn btn-delete" onClick={() => onDelete(task.id)}>
                Eliminar
            </button>
        </li>
    );
}