import axios from 'axios'; 
import { useEffect, useState } from 'react';

const User = () => {

    const[value, setValue] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data) =>{
           
  
            
            setValue(data.data)
        }).catch((err) =>{
            console.log(err)
        })
        console.log( "getting value", value)
    },[])
  return (
    <div>
      <h1>Table </h1>
      <hr />
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
     
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">  
      
        {
     
     value.map((e) =>{
           return(
               <tr key={e.id}>  {e.id}</tr>
           )
       })
   }  
   
    </th>
      <td>    {
     
     value.map((e) =>{
           return(
               <tr key={e.id}>  {e.title}</tr>
           )
       })
   } </td>
      <td>    {
     
     value.map((e) =>{
           return(
               <tr key={e.id}>  {e.body}</tr>
           )
       })
   } </td>
    
    </tr>

  </tbody>
</table>




   
    


    </div>
  )
}

export default User
