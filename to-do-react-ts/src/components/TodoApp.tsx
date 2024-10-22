import { useState } from "react"
import TasksList from "./TasksList"

const TodoApp = () => {
    const [tasks, setTasks] = useState<string[]>([])
    const [task, setTask] = useState<string>('')

    const handleAddTask = () => {
        console.log(`Add task: ${task}`)
        if(task.trim() === '') return
        setTasks(prev => [...prev, task])
        setTask('')
    }

    const handleDeleteTask = (index: number) => {
        console.log(`Delete task at index ${index}`)
        setTasks(prev => prev.filter((_, i) => i !== index))
    }

    const handleEditTask = (index: number, newTask: string) => {
        console.log(`Edit task at index ${index} with new task: ${newTask}`)
        setTasks(prev => prev.map((t, i) => i === index ? newTask : t))
    }

  return (
    <div>
        <h1>To do List</h1>
        <div>
            <input type="text"
            placeholder="New task"
            value={task}
            onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
        </div>
    </div>
  )
}

export default TodoApp