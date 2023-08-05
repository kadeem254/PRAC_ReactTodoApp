import { useState } from "react"

export default function NewTodoForm( props ){
  // add state management
  const [newItem, setNewItem] = useState("");
  
  // function handling new todo submission
  function handleSubmit( e ){
    // prevent reload of page
    e.preventDefault();

    // prevent empty adding empty todo items
    if( newItem === "" ) return

    // add items to todo array
    props.addTodoItem( newItem )

    // clear input field
    setNewItem("");

    return;
  }

  return(
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
  )
}