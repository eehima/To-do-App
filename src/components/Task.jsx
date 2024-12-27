import {  useDispatch } from "react-redux"
import { addTask } from "../redux/reducers/todoSlice"
import { useState } from "react"

const Task = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(text))
        setText("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task"/>

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Task