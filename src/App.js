import {BrowserRouter,Route} from 'react-router-dom' 
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
import Home from './pages/Home';
 
 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    
    <Route exact path="/" component={Home}/>
    <Route exact path="/todo-app" component={Todo}/>
     
      
       
    </BrowserRouter>
  );
}

export default App;
