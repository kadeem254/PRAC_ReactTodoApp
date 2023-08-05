import { useState } from "react"

export default function App(){
  // add state management
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([])

  // function handling new task submission
  function handleSubmit( e ){
    // prevent reload of page
    e.preventDefault();

    // cannot directly change state, destructure the array
    setTodos( (currentTodos)=>{
      // use a temporary value to store todos
      let newTodoList = [...currentTodos]
      // add new to do item
      newTodoList.push({
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      })
      // return new to do list
      return newTodoList
    })

    return;
  }

  return (
    <>
      {/* To-do App Title */}
      <h1 className="app-title text-center my-4">To Do App</h1>

      {/* Form to create to-do tasks */}
      <form onSubmit={ handleSubmit } id="new-todo-item-form d-flex">
        <div className="form-row d-flex flex-column mb-2">

          <label className="d-block fs-4" htmlFor="new-todo-text">
            New Item
          </label>

          <input className="d-block w-100 p-2 rounded-2"
          type="text"
          name="new-todo-text"
          id="new-todo-text"
          value={newItem}
          onChange={ e => setNewItem(e.target.value)} />

        </div>
        <button
          className="btn btn-primary d-block w-100" 
          type="submit"
        >
          Add Task
        </button>
      </form>

      {/* List to display to-do task entries */}
      <section className="display-section mt-5">
        <h2 className="section-title fs-4">Todo List</h2>
        <ul id="todo-items-list" className="list-unstyled p-0">

          { /* loop though saved todos and render them out */
            todos.map(
              ( todo ) => {
                return (
                  <li key={todo.id} className="todo-item d-flex flex-row justify-content-between
                  align-items-center bg-secondary p-2 rounded-2 my-2">
                    <label className="d-flex flex-row align-items-center">
                      <input type="checkbox" className="me-2" value={todo.completed}/>
                      <span className="todo-description">{todo.title}</span>
                    </label>
                    <button className="btn btn-danger">Delete</button>
                  </li>
                )
              }
            )
          }

        </ul>
      </section>

    </>
  )
}