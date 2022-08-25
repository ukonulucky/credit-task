import React, { useRef } from 'react'
import iconCross from "../public/images/icon-cross.svg"
import iconCheck from "../public/images/icon-check.svg"
import "../styles/Todo.css"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { completedTodo, deleteTodo } from '../redux/action'
export  const ListUnChecked = function ({ item, id }) {
  const radioRef = useRef()
  const spanRef = useRef()
  const imgRef = useRef()
     const dispatch = useDispatch()
  return (
    
        <div className="text" >
          <div className='radio' onClick={(e) => {
              console.log("thiis is the id")
            dispatch(completedTodo(id))
      }} ref={radioRef}>
        <span ref={ spanRef }>
          <img src={ iconCheck } alt="check icon" />
        </span>
        </div>
          <span>{item }</span>
      <img ref={ imgRef } src={iconCross} alt="delete" onClick={() => {
              dispatch(deleteTodo(id))
          }} />
      </div>
      
  )
}




export const  ListChecked = function({ item, id }) {
    const radioRef = useRef()
    return (
      <div className="text">
       
               <span className='remove'>
          {/* <img  src={ iconCheck } alt="check icon" /> */}
        </span>
          
            <del>{item }</del>
          </div>
    )
}
  

