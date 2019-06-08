import React from 'react';
// CSS imports
import './index.css';
// Material
import Container from '@material-ui/core/Container';
// Local
import TabsBar from './components/tabsbar';
import PhotosContainer from './photosContainer';
import BottomNav from './components/bottomNav';

// bootstrap 
//import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  // <div className='jumbo'>
  //       <p>
  //         <h1> 90416 Photography </h1>
  //         <br />
  //         <h3> Savannah Photography Studio </h3>
  //         <h3> Photos by Nicky Laczko </h3>
  //         <h3> Looking to have photos done? Contact Us</h3>
  //       </p>
  //     </div>
  return (
    <div className="App" style={{ backgroundColor: '#EAE3EA' }}>
      <TabsBar
        left='90416 Photography'
        center="About Us"
        right="Photos"
      />
      <PhotosContainer />
      <BottomNav />
    </div >
  );
}

export default App;
