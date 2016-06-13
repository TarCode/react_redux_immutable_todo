import React from 'react'
import { render } from 'react-dom'
import { TodoContainer } from './containers/TodoContainer'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

render(
  <Provider store={ store }>
    <TodoContainer/>
  </Provider>,
  document.getElementById('main')
);
