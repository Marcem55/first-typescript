import Task from "./Task"

type TasksListProps = {
    tasks: string[]
    onDeleteTask: (index: number) => void
    onEditTask: (index: number, newTask: string) => void
}

const TasksList = ({tasks, onDeleteTask, onEditTask}: TasksListProps) => {
  return (
    <div className="taskList">
        {tasks.map((task, index) => (
            <Task key={index} task={task} onDeleteTask={() => onDeleteTask(index)} onEditTask={(newTask) => onEditTask(index, newTask)} />
        ))}
    </div>
  )
}

export default TasksList