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
              <ProfileCard pic={homer} name="Homer" description="Homer and his wife Marge have three children: Bart, Lisa and Maggie. As the family's provider, he works at the Springfield Nuclear Power Plant as safety inspector." email="HomerSimp@gmail.com"/>
              <ProfileCard pic={lisa} name="Lisa" description="Lisa Simpson, at eight years old, is the second child of Homer and Marge, the younger sister of Bart, and the older sister of Maggie. Lisa's high intellectual and has a  left-wing political stance" email="LisaS@yahoo.com"/>
              <ProfileCard  name="Maggie" description="Maggie is know to have at least murdered one person" email="Maggie@Simpson.com" pic={maggie}/>
              <ProfileCard name="Marge" pic={marge} description="Marge is a role model" email="MargieS@hotmail.com"/>
              <ProfileCard pic={bart} name="Bart" description="Bart is the eldest child and only son of Homer and Marge, and the brother of Lisa and Maggie. Bart's most prominent and popular character traits are his mischievousness, rebelliousness and disrespect for authority. Hallmarks of the character include his chalkboard gags in the opening sequence" email="AyCaramba@hotmail.com"/>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
