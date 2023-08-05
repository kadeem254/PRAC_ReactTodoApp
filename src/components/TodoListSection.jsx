import EmptyTodoListPlaceholder from "./EmptyTodoListPlaceholder"
import TodoItem from "./TodoItem"

export default function TodoListSection({ todos, toggleTodo, deleteTodo }){

  return (
    <section className="display-section mt-5">
      <h2 className="section-title fs-4">Todo List</h2>
      <ul id="todo-items-list" className="list-unstyled p-0">

        { /* Show this if no todos exist */
          todos.length === 0 ? <EmptyTodoListPlaceholder/> : null
        }

        { /* loop though saved todos and render them out */
          todos.map( todo =>{
            return <TodoItem 
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}/>
          })
        }

      </ul>
    </section>
  )
}