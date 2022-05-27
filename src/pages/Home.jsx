import axios from 'axios';
import React,{useState,useEffect} from 'react';

export default function Home() {
const [users, setusers] = useState( [])

useEffect(() => {
   const getUser=async()=>{
      const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(data);
      setusers(data)
   }
   getUser()
}, [ ])

  return <div className='container'>
          <div className='col col-sm-8 offset-2 mt-5'>
            <table class="table table-bordered">
              <thead>
                <tr className='table-dark'>
                   
                  <th scope="col">Id</th>
                  <th scope="col">UserId</th>                   
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                  {
                    
                    users?.map((item,index)=>(
                      <tr key={index}>
                       
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>        
                        
                    </tr>
              ))
                  }
              </tbody>
            </table>

          
      </div>
  </div>;
}
