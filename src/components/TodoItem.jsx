export default function TodoItem({id, completed, title, toggleTodo, deleteTodo }){
  return (
    <li className="todo-item d-flex flex-row justify-content-between
      align-items-center bg-secondary p-2 rounded-2 my-2">

        <label className="d-flex flex-row align-items-center">
          <input type="checkbox"
            className="me-2"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} />
          <span className="todo-description">{title}</span>
        </label>

        <button className="btn btn-danger"
        onClick={ e => deleteTodo(id) }>Delete</button>
      </li>
  )
}