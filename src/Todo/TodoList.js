import React from 'react'
import TodoItem from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
  }
}
const TodoList = (props) => {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
      })}
    </ul>
  )
}

export default TodoList
