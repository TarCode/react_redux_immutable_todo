import React from 'react'

export function Todo(props) {
  const { todo } = props
  if (todo.isDone) {
    return <strike>{ todo.text }</strike>
  } else {
    return <span>{ todo.text }</span>
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, deleteTodo } = props

  const onSubmit = (e) => {
    const input = e.target
    const text = input.value
    const isEnterKey = (e.which == 13)
    const isLongEnough = text.length > 0

    if(isEnterKey && isLongEnough) {
      input.value = ''
      addTodo(text)
    }
  }

  const toggleClick = id => e => toggleTodo(id)
  const deleteItem = id => e => deleteTodo(id)
  return (
    <div className='container'>
      <div className='row center'>
        <h4>React, Redux and Immutable
          <br/>
          <small>Todo List</small>
        </h4>
      </div>
      <input type='text' placeholder='Add Todo' onKeyDown={ onSubmit } />
      <div>
        { todos.map(t => (
          <div className='row' key={ t.get('id') }>
            <div className='col s6'>
              <h5><Todo todo={ t.toJS() }/></h5>
            </div>
            <div className='col s6'>
              <button className='btn' onClick={toggleClick(t.get('id'))}>Toggle</button>
              <button className='btn red darken-4' onClick={deleteItem(t.get('id'))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
