import React from 'react'
import logotodo from '../images/logotodo.png'
function User() {
  return (
    <div className='User'>
      <div className="logo">
        <img src={logotodo}  alt="" />
      </div>
      <div className="info">
        <p>Abinav!</p>
        <a href="#" >Logout!</a>
      </div>
        
    </div>
  )
}

export default User