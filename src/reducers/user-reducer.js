  
export const todoReducers=(state={list:[]},action)=>{
    switch (action.type) {
        case "ADD_TODO":
            const {id,data}=action.payload
            return{
                ...state,list:[
                    ...state.list,{
                        id:id,
                        data:data
                        
                    }]
                }
                
                case "DELETE_TODO":
                    const newList=state.list.filter((item)=>item.id != action.id)
                    return{
                        ...state, 
                        list:newList
                    }
                    
                    case "UPDATE_TODO":
                    let newTodos = [...state];
                    let index = -1;
                    for (let i = 0; i < newTodos.length; i++) {
                        index++;
                        if (newTodos[i].id == action.payload.id) {
                            break;
                        }
        
                    }
                    if (index != -1) {
                        newTodos[index] = action.payload;
                        return {...state,list:newTodos};
                    }
        
            default:return state;
        }
 }
  