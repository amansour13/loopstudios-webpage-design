import './App.css';
import vrImage from './img/image-interactive.jpg';

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
    </>
  );
}

export default App;
