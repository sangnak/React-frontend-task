
import './App.css';

import { ReduxCounter } from './components/ReduxCounter';
import Todos from './components/Todo/Todos';






function App() {

  return (
    <div className="App">

       <ReduxCounter/>
  
    <Todos/>
    </div>
  );
}

export default App;
