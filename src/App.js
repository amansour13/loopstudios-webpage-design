import './App.css';
import vrImage from './img/image-interactive.jpg';
import Image1 from './img/image-deep-earth.jpg';
import Image2 from './img/image-night-arcade.jpg';
import Image3 from './img/image-soccer-team.jpg';
import Image4 from './img/image-grid.jpg';
import Image5 from './img/image-from-above.jpg';
import Image6 from './img/image-pocket-borealis.jpg';
import Image7 from './img/image-curiosity.jpg';
import Image8 from './img/image-fisheye.jpg';
import fb from './img/facebook.png';
import tw from './img/twitter.png';
import pn from './img/pinterest.png';
import inst from './img/instagram.png';

function SocialMediaIcons() {
  return (
    <div className='socialIcons'>
      <img src={fb} className='icon'/>
      <img src={tw} className='icon'/>
      <img src={pn} className='icon'/>
      <img src={inst} className='icon'/>
    </div>
  );
}


function Footer(){
  return(
    <div className='footer'>
      <div className='line'>
        <h2>loopstudios</h2>
        <SocialMediaIcons />
      </div>
      <div className='line'>
        <ul>
          <li><a href='#' className='pages'>About</a></li>
          <li><a href='#' className='pages'>Careers</a></li>
          <li><a href='#' className='pages'>Events</a></li>
          <li><a href='#' className='pages'>Products</a></li>
          <li><a href='#' className='pages'>Support</a></li>
        </ul>
        <h4>© 2021 Loopstudios. All rights reserved.</h4>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card" style={{backgroundImage: `url(${props.url})`}}>
      <h2>{props.txt}</h2>
    </div>
  );
}

function VR(){
  return (
    <div className='vrSection'>
      <img src={vrImage} className='vrImg' alt='interactive image'/>
      <div className='Fmessage2'>
        <h2>The leader in interactive VR</h2>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
projects for some of the best companies around the globe. Our award-winning 
creations have transformed businesses through digital experiences that bind 
to their brand.</p>
      </div>
    </div>
  );
}

function MainSection(){
  return (
    <div className='main'>
      <div className='subHeader'>
        <VR />
        <div className='creationTitle'>
          <h2>Our creations</h2>
          <button>SEE ALL</button>
        </div>
        <div className='creationInfo'>
            <Card url={Image1} txt='Deep earth'/>
            <Card url={Image2} txt='Night arcade'/>
            <Card url={Image3} txt='Soccer team VR'/>
            <Card url={Image4} txt='The grid'/>
        </div>
        <div className='creationInfo'>
            <Card url={Image5} txt='From up above VR'/>
            <Card url={Image6} txt='Pocket borealis'/>
            <Card url={Image7} txt='The curiosity'/>
            <Card url={Image8} txt='Make it fisheye'/>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
    <div className='header'>
      <div className='subHeader'>
          <nav>
            <h2>loopstudios</h2>
            <ul>
              <li><a href='#' className='pages'>About</a></li>
              <li><a href='#' className='pages'>Careers</a></li>
              <li><a href='#' className='pages'>Events</a></li>
              <li><a href='#' className='pages'>Products</a></li>
              <li><a href='#' className='pages'>Support</a></li>
            </ul>
          </nav>
          <div className='Fmessage'>
            <h1>Immersive experiences that deliver</h1>
          </div>
      </div>
    </div>
    <MainSection />
    <Footer />
    </>
  );
}

export default App;
