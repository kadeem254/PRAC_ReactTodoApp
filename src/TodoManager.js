function saveTodos( todos ){
  // check if it is an not array or it is empty array
  if( !Array.isArray(todos) || todos === [] ){
    return
  }

  // save to local storage
  window.localStorage.setItem(
    "TODO_LIST",
    JSON.stringify(todos)
  );

  return
}

function fetchTodos(){
  let todos =  window.localStorage.getItem( "TODO_LIST" );

  if( null === todos ){
    return [];
  }

  return JSON.parse( todos );
}

export {
  saveTodos,
  fetchTodos
}