import { useEffect, useState } from "react"
import NewTodoForm from "./components/NewTodoForm"
import EmptyTodoListPlaceholder from "./components/EmptyTodoListPlaceholder"
import TodoListSection from "./components/TodoListSection"
import { fetchTodos, saveTodos } from "./TodoManager"



export default function App(){
  
  const [todos, setTodos] = useState(()=>{
    return fetchTodos();
  })

  useEffect(
    () => {
      return saveTodos( todos );
    },
    [ todos ]
  )

  function AddTodo( title  ){
    setTodos( (currentTodos)=>{

      // copy value of todo array into temporary array
      let newTodoList = [...currentTodos]

      // push new to do item to temporary array
      newTodoList.push({
        id: crypto.randomUUID(),
        title: title,
        completed: false
      })

      // replace todo array with temporary array
      return newTodoList
    })
  }

  function toggleTodo( id, completed ){

    setTodos( currentTodos => {
      return currentTodos.map(
        ( todo ) => {
          if( id === todo.id ){
            return { ...todo, completed }
          }
          return todo;
        }
      )
    })

    return
  }

  function deleteTodo( id ){
    setTodos(
      currentTodos => {
        return currentTodos.filter( todo => {
          // return todos that do not have the id
          if( id !== todo.id ){
            return todo
          }

        })
      }
    )
  }

  // render out our todolist
  return (
    <>
      {/* To-do App Title */}
      <h1 className="app-title text-center my-4">To Do App</h1>

      <NewTodoForm addTodoItem={AddTodo} />

      <TodoListSection todos={todos} toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}/>

    </>
  )
}