import React, { useState, useRef, useEffect } from 'react'
import bgImageLight from "../public/images/bg-desktop-light.jpg"
import bgImageDark from "../public/images/bg-desktop-dark.jpg"
import iconSun from "../public/images/icon-sun.svg"
import iconMoon from "../public/images/icon-moon.svg"
import { Toggle } from "react-toggle-component";
import { addTodo, showCompeleted, clearCompeleted } from "../redux/action"
import "../styles/Todo.css"
import { useDispatch, useSelector} from "react-redux"
import { ListUnChecked, ListChecked } from './List'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

 
function Todo() {
    // seting input error
    const [error, setError] = useState(false)
// seting the toogle functionality
    const toggleRef = useRef()
    const [imgStateDark, setImgStateDark] = useState(true)

 // invoking the redux dispatch method
     const dispatch = useDispatch()

 // getting inputs from the user
   const [input, setInput] = useState("")

// setting the filter state  and function
const [filterState, setFilterState] = useState([])

// setting the filter state  and function
const [filterCondition, setFilterCondition] = useState("")
  
const filterFunction = () => {
    if (filterCondition === "completed") {
        console.log("completed section just ran")
     const result = todoList?.filter((i) => {
         return i.done === true
      })
      setFilterState([...result])
    } else if (filterCondition === "active") {
        const result = todoList?.filter((i) => {
           return i.done === false
        })
        setFilterState([...result])
    } else if (filterCondition === "all") {
        setFilterState(todoList)
    } else {
        setFilterState(todoList)
    }
}


// getting the list of todos
    const todoList = useSelector(state => state.todo)
    const itemsLeft = todoList.filter(i => i.done === false)
    const [listTodos, setListTodos] = useState([])
    useEffect(() => {
      filterFunction()
    }, [todoList,filterCondition])
    

// setting the filter function 

    const newlistOfTodos = () => {
      return  filterState?.map((i, j) => {
          return <Draggable key={i.id.toString()} draggableId={i.id.toString()} index={ j }> 
                {(provided) => {
                 return   <div key={j}  {...provided.draggableProps} {
                        ...provided.dragHandleProps
                    } ref={provided.innerRef}>
                        {i.done === false ? <ListUnChecked item={i.item} id={i.id} /> :
                            <ListChecked item={i.item} id={i.id} />}
                    </div>
                }}
               </Draggable>
        })
    }
  

    // useEffect(() => {
    //     filterList = [...filterFunction()]
    //     console.log("this is the filtered List", filterList)
    // }, [filterState])
    
    useEffect(() => {
        const result = newlistOfTodos()
        console.log("this is the result",result)
        setListTodos(todoList !== [] ? [...result]: "" )
     
        },[filterState])

  return (
      <div className="container" ref={ toggleRef }>
          <div className="wrapperOne">
              { imgStateDark ? <img src={bgImageDark} alt="bacgroundiMage" /> : <img src={bgImageLight} alt="bacgroundiMage" />}
              <div className="toggle">
              <Toggle name="toggle-5"
                      onToggle={() => {
                          toggleRef.current.classList.toggle("new")
                          setImgStateDark(!imgStateDark)   
              }}
            />
              </div>
          </div>
          <div className="wrapper">
          <div className="todo">
              <h1>Todo</h1>
              { imgStateDark ? <img src={iconMoon} alt="mooniMage" /> : <img src={iconSun} alt="suniMage" />}
              </div>
              <div className="inputDiv">
                  <span>{input === "" ? "Create a New Todo" : "Currently typing"}</span>
                  <form onSubmit={(e) => {
                      e.preventDefault()
                      setError(false)
                     if(input === ""){
                        console.log("mistake")
                        setError(true)
                        return 
                     }
                     
                      dispatch(addTodo(input))
                      setInput("")
                  }}>
                  <input type="text" value={ input } onChange={(e) => setInput(e.target.value)}
                      />
                  </form>
                 
              </div>
              {error ? <h3 className="error">Error: Input Should Not be Empty</h3> :
                  ""}
              <div className="todoList">
                <DragDropContext>
                    <Droppable droppableId="characters">
                       {
                        (provided) => {
                        return    <div {...provided.droppableProps} ref={provided.innerRef}>
                                {listTodos}
                                { provided.placeholder}
                            </div>
                        }
                       }
                    </Droppable>
                </DragDropContext>
               
              
              <div className="others">
                 
                  <span>{itemsLeft.length} { itemsLeft.length > 1 ? "items":"item"} left</span>
                      <div>
                          
                  <span className='all' onClick={ 
                      () => {
                        setFilterCondition("all")
                      }
                  }> All </span>
                          <span className='active' onClick={ 
                              () => {
                                setFilterCondition("active") 
                      }
                  }> Active</span>
                          
                          <span className='complete' onClick={ 
                      () => {
                        setFilterCondition("completed")
                      }
                  }> Completed</span>
                      </div>
                      <span className={"clear"} onClick={ 
                      () => {
                          dispatch(clearCompeleted())
                      }
                  }> Clear Completed</span>
  </div>
              </div>
          </div>
          <span className='center'>Drap and drop to order list</span>

   </div>
  )
}

export default Todo