import './App.css';
import NavBar from './components/NavBar/NavBar'
import HelloWorld from './components/HelloWorld/HelloWorld';
import { useState } from 'react'

function App() {
  // useState([]), useState(null), useState()
  // setState({...state, ...newChanges})
  // setState is the method provided by react to modify the existing state
  let [state, setState] = useState({
    name: 'Alex',
    activities: ['Jet coding', 'surf coding' ],
    displayMsg: () => {
      console.log('Howdy!')
    }
  })
  return (
    <div className="App">
      <NavBar />
      <h1>My First React app!</h1>
      <HelloWorld 
      name={state.name} 
      activities={state.activities}
      displayFunc={state.displayMsg}
      />
    </div>
  );
}
export default App;