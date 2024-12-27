import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

// create Slice
const todoSlice = createSlice({
    name: "todo",
    initialState,
   
    // reducers
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload,completed: false });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            task.completed = !task.completed;
        },
        editTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            task.text = action.payload.text;
        },
    }
})

// export actions

export const { addTask, deleteTask, toggleTodo, editTask } = todoSlice.actions;

// export reducers

export default todoSlice.reducer