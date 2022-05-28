import { INC_COUNT , DEC_COUNT,ADD_TODO, ADD_TODO_LOADING, ADD_TODO_LOADING_SUCCESS, GET_TODO_LOADING,GET_TODO_LOADING_SUCCESS} from "./action.type"

const init ={
    count:0,
    todos:{
        loading:false,
        error:false,
        data:[]
    },
   
}

export const Reducer = (store=init, { type,payload}) =>{

    switch(type){
        case INC_COUNT: return { ...store, count:store.count + payload}
        case DEC_COUNT: return  { ...store, count:store.count - payload};

        // case ADD_TODO:
        //     return{...store,todos:[...store.todos , payload] };

        case ADD_TODO_LOADING :
            return{
                ...store, todos:{
                    ...store.todos,
                   loading:true
                }
            }

       
        case ADD_TODO_LOADING_SUCCESS :
                return{
                    ...store, todos:{
                        ...store.todos,
                       loading:false
                    }
                }

                case GET_TODO_LOADING :
                    return{
                        ...store, todos:{
                            ...store.todos,
                           loading:true
                        }
                    }
        
               
                case GET_TODO_LOADING_SUCCESS :
                        return{
                            ...store, todos:{
                                ...store.todos,
                               loading: false,
                               data:  payload,
                            }
                        }







      

        

       
       default :return{
           ...store
       }
    }
}