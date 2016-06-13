import { List, Map } from 'immutable'

const init = List([])
let nextId = 0
export default function(state = init, action) {
  console.log('action from reducer', action);
  switch (action.type) {
    case 'ADD_TODO':
      nextId++
      const newState = Object.assign({}, {
        id: nextId,
        isDone: action.data.isDone,
        text: action.data.text
      })
      return state.push(Map(newState))
    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.get('id') === action.data) {
          return t.update('isDone', isDone => !isDone)
        } else {
          return t
        }
      })
    case 'DELETE_TODO':
      var newArr = state.filter(t => {
        console.log(t)
        console.log(action.data);
        if (t.get('id') !== action.data) {
          return t
        }
      })
      return newArr
    default:
      return state
  }
}
