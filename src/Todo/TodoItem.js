import React, {useContext} from 'react';
import Context from '../context';

const TodoItem = ({todo, index, onChange}) => {
  const {removeTodo} = useContext(Context)
  const classes = []
  if (todo.completed) {
    classes.push('done')
  }

  const styles = {
    li:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '10px',
      border: '1px solid rgba(0, 0, 0, .3)',
      marginBottom: '10px',
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, .03)',
      boxShadow: '0px 4px 8px -3px rgba(0,0,0,0.05)'
    },
    input: {
      marginRight: '15px'
      
    }
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)}/>
        <b>{index+1}</b> {todo.title}</span> 
        <button className='close' onClick={() => removeTodo(todo.id)}>X</button>
      </li>
  )
}

export default TodoItem
