type TaskProps = {
    task: string
    onDeleteTask: () => void
    onEditTask: (newTask: string) => void
}

const Task = ({task, onDeleteTask, onEditTask}: TaskProps) => {
  return (
    <div className="task">
        <span>{task}</span>
        <button onClick={onDeleteTask}>Delete</button>
        <button onClick={() => {
            const newTask = prompt('Enter new task:', task)
            if (newTask) {
                onEditTask(newTask)
            }
        }}>Edit</button>
    </div>
  )
}

export default Task