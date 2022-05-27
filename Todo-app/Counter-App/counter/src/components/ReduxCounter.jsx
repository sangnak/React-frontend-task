import {store } from '../Redux/store'
import {useSelector, useDispatch } from 'react-redux'
import {inc_COUNT  , dec_COUNT} from '../Redux/action'

export const ReduxCounter = ()=>{
  const data = useSelector( (store)=>store.count)
  var counterrr=0
  console.log("Re-Rendered count", counterrr++)
  
  console.log("selected data are here : ", data)

  
  const dispatch = useDispatch()
  return (
    <div className="App">
  
    <h1> Redux Counter</h1>
      <button onClick={ () =>{
        dispatch(inc_COUNT(1))
      }} >+</button>  Count : {data}   <button onClick={() =>{
        dispatch(dec_COUNT(1))
      }} >-</button>
   
    </div>
  );
}  