import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo } from '../actions/user-action'
import TodoList from '../components/TodoList'
 

export default function Todo() {
    const dispatch=useDispatch()
    const [adduser, setadduser] = useState("")
    const {list}=useSelector(state=>state.todoReducers)
    console.log(list);
    const onAddTodoHandle=async(e)=>{
        e.preventDefault()
        console.log(adduser);
        dispatch(addTodo(adduser))
        adduser("")
    }
     
  return (
    <div className='container'> 
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="card mt-5">
                        <div className="card-header">Add User</div>
                        <div className="card-body">
                            <form onSubmit={onAddTodoHandle}>
                                 <input type="text"  onChange={e=>setadduser( e.target.value)} className='form-control' placeholder='enter title' /><br />
                                 <button className="btn btn-success w-100" onClick={onAddTodoHandle}>Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <TodoList itemlist={list} />
    </div>
  )
}
