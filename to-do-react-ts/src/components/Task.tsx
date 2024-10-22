type TaskProps = {
    task: string
    onDeleteTask: () => void
    onEditTask: (newTask: string) => void
}

const Task = ({task, onDeleteTask, onEditTask}: TaskProps) => {
  return (
    <div className="task">
        <span>{task}</span>
        <div className="btns">

        <button className="edit-btn" onClick={() => {
            const newTask = prompt('Enter new task:', task)
            if (newTask) {
                onEditTask(newTask)
            }
        }}>Edit</button>
        <button onClick={onDeleteTask}>Delete</button>
        </div>
    </div>
  )
}

export default Task