import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  tasks: [{
    id: '1',
    title: 'Going to buy vegetables',
    description: 'Hello',
    dueDate: '2021-06-17',
    priority: 'none',
    currentState: 'completed'
  },
  {
    id: '2',
    title: 'Doing out for groceries',
    description: 'Hello',
    dueDate: '2021-06-17',
    priority: 'none',
    currentState: 'pending'
  }]
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const uuid = uuidv4()
      action.payload.id = uuid
      action.payload.createdOn = new Date().getTime()
      state.tasks = [...state.tasks, action.payload]
    },

    editTodo: (state, action) => {
      const indexToUpdate = state.tasks.findIndex((task) => task.id === action.payload.id)
      state.tasks[indexToUpdate] = action.payload
    },

    deleteTodo: (state, action) => {
      console.log('action', action)
      const indexToDelete = state.tasks.findIndex((task) => task.id === action.payload)
      console.log(indexToDelete)
      state.tasks.splice(indexToDelete, 1)
    },

    changeTodoCurrentState: (state, action) => {
      const indexToChange = state.tasks.findIndex((task) => task.id === action.payload.id)
      state.tasks[indexToChange].currentState = action.payload.currentState === 'pending' ? 'completed' : 'pending'
    },
  },
})

const filterTodosWithSearch = (searchText, todos) => {
  if (searchText) {
    return todos.filter((todo) => todo.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
  }
  return todos
}

export const { addTodo, editTodo, deleteTodo, changeTodoCurrentState } = todoSlice.actions

export const selectTodos = (searchText) => (state) => filterTodosWithSearch(searchText, state.todos.tasks)

export const selectPendingTodos = (searchText) => (state) => {
  const tasksHavingPendingState = state.todos.tasks.filter((todo) => todo.currentState === 'pending')
  return filterTodosWithSearch(searchText, tasksHavingPendingState)
}

export const selectCompletedTodos = (searchText) => (state) => {
  const tasksHavingCompletedState = state.todos.tasks.filter((todo) => todo.currentState === 'completed')
  return filterTodosWithSearch(searchText, tasksHavingCompletedState)
}

export default todoSlice.reducer;
