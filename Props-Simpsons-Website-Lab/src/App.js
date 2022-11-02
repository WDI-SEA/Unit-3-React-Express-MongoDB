import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import shrek from './shrek.png'
import fiona from './fiona.png'
import donkey from './donkey.png'
import cat from './cat.png'
import lord from './lord.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={shrek} name={"Shrek"} desription={"Stay away from his swamp!"} email={"shrek@shrek.com"}/>
              <ProfileCard pic={fiona} name={"Fiona"} desription={"'And last, but certainly not least, bachelorette number three is a fiery redhead from a dragon guarded castle surrounded by hot boiling lava! But don't let that cool you off. She's a loaded pistol who likes piña coladas and getting caught in the rain. Yours for the rescuing, Princess Fiona!'"} email={"fiona@shrek.com"}/>
              <ProfileCard pic={donkey} name={"Donkey"} desription={" Quite the chatterbox..."} email={"theRealDonkey@shrek.com"}/>
              <ProfileCard pic={cat} name={"Puss in Boots"} desription={"Smooth-talking cat with a Spanish accent, beware of his 'cute face'"} email={"meow@shrek.com"}/>
              <ProfileCard pic={lord} name={"Lord Farquaad"} desription={"short, ruthless ruler of Duloc, self-absorbed, self-deceiving, lonely, and cruel."} email={"LordMaximusFarquaad@shrek.com"}/>
              
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
