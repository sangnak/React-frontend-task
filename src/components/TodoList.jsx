import React,{useState,useEffect} from 'react'
import { deleteTodo, updateTodo } from '../actions/user-action';
import { useDispatch } from 'react-redux';

export default function TodoList({itemlist}) {
    const [editable, setEditable] = useState("")
    const dispatch=useDispatch()
    const [title, settitle] = useState("")

    useEffect(() => {
        const updateTodo=(id)=>{
            const result= itemlist.filter((item)=>item.id===editable)
            console.warn(result[0]);
            // settitle(result[0].data)
        }
        updateTodo()
    }, [ editable])
    

    const onUpdateTodoHandle=(e)=>{
        e.preventDefault()
        dispatch(updateTodo([
            ...itemlist,{
            data:title}
        ]))
        console.log(itemlist);
    }
     
  return (
    <div> 
        <div className='col col-sm-8 offset-2 mt-5'>
            <table class="table table-bordered">
              <thead>
                <tr className='table-dark'>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    itemlist?.map((item,index)=>(
                      <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.data}</td>
                      <td> 
                      <button className="btn btn-primary m-2"
                    onClick={e=>{setEditable(item.id)}} data-bs-target="#update" data-bs-toggle="modal"
                > Edit</button>
                          <button className='btn btn-danger' onClick={e=>dispatch(deleteTodo(item.id))}>Delete</button>
                      </td>
                    </tr>
              ))
                  }
              </tbody>
            </table>
         </div>


         <div class="modal fade" id="update" >
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-header">
                  Update Todo
                 </div>
                 <div class="modal-body">
                    <form onSubmit={onUpdateTodoHandle}>
                        <input type="text" value={title} onChange={e=>settitle( e.target.value)} className='form-control' placeholder='enter title' /><br />
                        <button className="btn btn-success w-100" data-bs-dismiss="modal" onClick={onUpdateTodoHandle}>Update Todo</button>
                    </form>
                 </div>   
               </div>
             </div>
           </div>
    </div>
  )
}
