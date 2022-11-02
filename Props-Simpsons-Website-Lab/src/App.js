import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
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
              <ProfileCard pic={homer} name = {"Hussain Al-Adrj"}
                           descreption = {"A handsome guy likes to watch movies at night but he likes sleeping in the class more"}
                           email = {"Hussain@gmail.com"} />
              <ProfileCard pic={lisa} name = {"Fatema Al-Attar"}
                           descreption = {"The owner of the quote that says; you have to have some fun in your life"}
                           email = {"Fatema@gmail.com"} />
              <ProfileCard pic={maggie} name = {"Taylor Darneille"} 
                           descreption = {"Hey you'll, you're in a bootcamp program you have to have a homework."}
                           email = {"Taylor@gmail.com"}/>
              <ProfileCard pic={marge} name = {"Hessa Ahmed"} 
                           descreption = {"A hardworking student always in the first level of the class"} 
                           email = {"Hessa@gmail.com"}/>
              <ProfileCard pic={bart} name = {"Kareem Draz"} 
                           descreption = {"WoW! It's the running! You can see Kareem in the sky every night."} 
                           email = {"Kareem@gmail.com"}/>
              
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
