import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} />
              <ProfileCard pic={lisa} />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard pic={bart} />
              <ProfileCard pic={homer} name={'Homer'} email={'homer@simposon.coom'} description={'Loves his familv as much as donuts'} />
              <ProfileCard pic={marge} name={'Marge'} email={'marge@simposon.coom'} description={'Marge is a role model.'} />
              <ProfileCard pic={bart} name={'Bart'} email={'bart@simposon.coom'} description={'Bart is the eternal prankster'} />
              <ProfileCard pic={lisa} name={'Lisa'} email={'lisa@simposon.coom'}  description={'Amazing saxophone player.'} />
              <ProfileCard pic={maggie} name={'Maggie'} email={'maggie@simposon.coom'} description={'Maggie is known to have murdered at least one person'} />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;

             