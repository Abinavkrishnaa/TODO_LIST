import React, { useState } from 'react'
import Modal from './Modal';
import {Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';







// import DateFnsUtils from "@date-io/date-fns";
function AddNewTodo() {
  const [showModal,setShowModal] = useState(false);
  const [text,setText] = useState('')
  const [day,setDay] = useState(new Date())
  const [time,setTime] = useState(new Date())

  return (
    <div>
      
      <div className="AddNewTodo">
      
        <div className="btn">
            <button  onClick={()=>setShowModal(true)} >
              +NEW TODO
            </button>  
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form >
            <div className="text">
              <h3>Add new to do!</h3>
              <input type='text' value={text} onChange={e=>setText(e.target.value)} placeholder='to do...' autoFocus />
            </div>
            <div className="remind">
              <Bell />
              <p>remind me</p>
            </div>
            <div className="pick-day">
              <div className="title">
                <CalendarDay />
                <p>Choose a day!</p>
              </div>
              <DatePicker 
              value={day} onChange={(day) => setDay(day)}/>
              
            </div>
            <div className="pick-time">
              <div className="title">
                <Clock />
                <p>Choose timew!</p>
              </div>
              <TimePicker value={time} onChange={(time)=>setTime(time)} />
            </div>
            <div className="pick-project">
              <div className="title">
                <Palette />
                <p>Pick project!</p>
              </div>
              <div className="projects">
                <div className="project">
                  personal
                </div>
                <div className="project">
                  work
                </div>
              </div>
            </div>
            <div className="cancel" onClick={()=>setShowModal(false)}>
              <X size={40} />
            </div>
            <div className="confirm">
              <button>+ ADD TODO</button>
            </div>
          </form>

         

        </LocalizationProvider>
        </Modal>
      </div>
    </div>
  )
}

export default AddNewTodo