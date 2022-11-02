import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Students from'../Students'

function App() {
// useState([]), useState(null), useState()
  // setState({...state, ...newChanges})
  // setState is the method provided by react to modify the existing state
  let [students, setStudents] = useState({ 
    students=
      {
        name: 'Nahid',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores: []
      },
      {
        name: 'Ahlam',
        bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
        scores: []
      },
      {
        name: 'Taher',
        bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
        scores: []
      }
  
  })
  return (
    <div className="App">
    {students.map(s=>
      <Student 
      name={s.name}
      bio={s.bio}
      scores={s.scores}
      />
    )}
    
      
</div>
  
  
  );
}

export default App;
