
import './App.css';
import {useEffect , useState} from "react"
import { Todo } from './components.js/todo';
import { Counter } from './components.js/counter';

function App() {
  
  const [show , setShow] = useState(true)
  return (

    <div className="App">
      {show ? <Counter/> : null}
      <button onClick={() => setShow(!show)}>Toggle</button>
      
    </div>
  );
}

export default App;
