import React, { useState } from 'react'

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState('');
  function submitForm(e) {
    e.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }
  return (
    <form onSubmit={submitForm} className='input-form'>
      <input style={{ width: '80%', height: '30px', border: 'none', paddingLeft: '10px', boxShadow: '0px 4px 8px -3px rgba(0,0,0,0.1)' }} value={value} onChange={(event => setValue( event.target.value ))} />
      <button type='submit' className='add'>Add list</button>
    </form>
  )
}

export default AddTodo
