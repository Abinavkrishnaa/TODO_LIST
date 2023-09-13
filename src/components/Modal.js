import React, { useRef } from 'react'

function Modal({children,showModal,setShowModal}) {
    const Modalref = useRef()
    const closeModal = (e)=>{
        if(e.target === Modalref.current){
            setShowModal = (false)
        }
    }
  return (
    showModal&&
    <div className='Modal' onClick={closeModal} ref={Modalref}>
        <div className="container">
            {children}
        </div>

    </div>
  )
}

export default Modal