import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'



function App() {

  let [state, setState] = useState({
    simpsons: [
      {
        name: 'Homer Simpson',
        description: 'Loces his family as much as donuts',
        email: 'homer@simpson.com'
      },
      {
        name: 'Lisa Simpson',
        description: 'Amazing saxophone player',
        email: 'lisa@simpson.com'
      },
      {
        name: 'Maggie Simpson',
        description: 'Known for murder',
        email: 'maggie@simpson.com'
      },
      {
        name: 'Marge Simpson',
        description: 'Role model',
        email: 'marge@simpson.com'
      },
      {
        name: 'Bart Simpson',
        description: 'The prankster',
        email: 'bart@simpson.com'
      }
    ]
  })

  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer}
              info={state.simpsons[0]}
              />
              <ProfileCard pic={lisa}
              info={state.simpsons[1]}
              />
              <ProfileCard pic={maggie}
              info={state.simpsons[2]}
              />
              <ProfileCard pic={marge}
              info={state.simpsons[3]}
              />
              <ProfileCard pic={bart}
              info={state.simpsons[4]}
              />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
