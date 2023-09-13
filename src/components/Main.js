import React from 'react'
import Todos from './Todos'
import EditTodo from './EditTodo'

function Main(  ) {
  return (
    <div className='Main'>
        <Todos />
        <EditTodo />  
    </div>
  )
}

export default Main