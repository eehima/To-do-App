import { useSelector, useDispatch } from "react-redux"
import { deleteTask, toggleTodo, editTask} from "../redux/reducers/todoSlice"

const TaskList = () => {
    const tasks = useSelector(state => state.todo.tasks)
    const dispatch = useDispatch()
  return (
    <div>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTodo(task.id))} />
                    <span>{task.text}</span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    <button onClick={() => dispatch(editTask(task.id))}>Edit</button>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default TaskList