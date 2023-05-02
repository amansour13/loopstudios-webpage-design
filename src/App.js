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
import Image1m from './img/mobile/image-deep-earth.jpg';
import Image2m from './img/mobile/image-night-arcade.jpg';
import Image3m from './img/mobile/image-soccer-team.jpg';
import Image4m from './img/mobile/image-grid.jpg';
import Image5m from './img/mobile/image-from-above.jpg';
import Image6m from './img/mobile/image-pocket-borealis.jpg';
import Image7m from './img/mobile/image-curiosity.jpg';
import Image8m from './img/mobile/image-fisheye.jpg';
import fb from './img/facebook.png';
import tw from './img/twitter.png';
import pn from './img/pinterest.png';
import inst from './img/instagram.png';
import { useState, useEffect } from 'react';

function Humberger(){
  return(
    <div class="navbar_toggle">
      <span></span>
      <span></span>
      <span></span>
  </div>
  );
}

function SocialMediaIcons(props) {
  return (
    <div className={'socialIcons ' + props.cl}>
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
        <SocialMediaIcons cl='bef'/>
      </div>
      <div className='line'>
        <ul>
          <li><a href='#' className='pages'>About</a></li>
          <li><a href='#' className='pages'>Careers</a></li>
          <li><a href='#' className='pages'>Events</a></li>
          <li><a href='#' className='pages'>Products</a></li>
          <li><a href='#' className='pages'>Support</a></li>
        </ul>
        <SocialMediaIcons cl='aft'/>
        <h4>© 2021 Loopstudios. All rights reserved.</h4>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card" >
      <img src={props.url} alt={props.url}/>
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

function BtnAfter(){
  return(<div className='btnDiv'><button className='btn'>See All</button></div>);
}

function MainSection(){
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(max-width: 650px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 650px)');
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <div className='main'>
      <div className='subHeader'>
        <VR />
        <div className='creationTitle'>
          <h2>Our creations</h2>
          <button>SEE ALL</button>
        </div>
        <div className='creationInfo'>
        {isSmallScreen ? (
          <>
            <Card url={Image1m} txt='Deep earth'/>
            <Card url={Image2m} txt='Night arcade'/>
            <Card url={Image3m} txt='Soccer team VR'/>
            <Card url={Image4m} txt='The grid'/>
          </>
          ) : (
            <>
              <Card url={Image1} txt='Deep earth'/>
              <Card url={Image2} txt='Night arcade'/>
              <Card url={Image3} txt='Soccer team VR'/>
              <Card url={Image4} txt='The grid'/>
            </>
          )}
        </div>
        <div className='creationInfo'>
        {isSmallScreen ? (
          <>
            <Card url={Image5m} txt='From up above VR'/>
            <Card url={Image6m} txt='Pocket borealis'/>
            <Card url={Image7m} txt='The curiosity'/>
            <Card url={Image8m} txt='Make it fisheye'/>
          </>
          ) : (
            <>
              <Card url={Image5} txt='From up above VR'/>
              <Card url={Image6} txt='Pocket borealis'/>
              <Card url={Image7} txt='The curiosity'/>
              <Card url={Image8} txt='Make it fisheye'/>
            </>
          )}
            
        </div>
        <BtnAfter />
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
            <Humberger />
          </nav>
          <div className='Fmessage'>
            <h2>Immersive experiences that deliver</h2>
          </div>
      </div>
    </div>
    <MainSection />
    <Footer />
    </>
  );
}

export default App;
