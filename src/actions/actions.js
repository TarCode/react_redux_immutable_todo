export function addTodo(text){
  return {
    type: 'ADD_TODO',
    data: {
      isDone: false,
      text: text
    }
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    data: id
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    data: id
  }
}
