import logo from './logo.svg';
import './App.css';
import FloorPlan from './components/FloorPlan/FloorPlan'
import {useState} from 'react'
function App() {
    // useState([]), useState(null), useState()
  // setState({...state, ...newChanges})
  // setState is the method provided by react to modify the existing state
  let [state, setState] = useState({
    FloorPlan: ['Kitchen'],
    Kitchen: ['Sink', 'Oven'],
    BedRoom: ['BR1', 'BR2', 'BR3'],
    Bath: ['Bath1','Bath2'],
    displayMsg: () => {
      console.log('123')
    }
  })
  return (
    <div className="App">
    <FloorPlan/>

    </div>
  );
}
export default App;

// import React from 'react'

// function HelloWorld(props) {
  
//     console.log('These are the props data from my parent App component ', props)

//     console.log(props.activties)
    
//     return (
//         <div>
//             Hello {props.name}
//             {props.activities.map(act => 
//                 <p key={act}>{act}</p>
//             )}
//         </div>
//   )
// }

// export default HelloWorld

