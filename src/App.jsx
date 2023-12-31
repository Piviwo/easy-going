import './App.css';
import MainMap from './components/Map/main-map.jsx';
import PlaceForm from './components/AddAPlace/new-place-form.jsx';
import Header from './components/Navbar/header.jsx';
import { useState, useEffect } from 'react';
import Meeting from './components/Meeting/meeting.jsx';

function App() {
  const [navigation, setNavigation] = useState('MAP');
  const [marker, setMarker] = useState({ longitude: 11.576124, latitude: 48.137154 });



  return (
    <div className='main-container'>
      <Header setNavigation={setNavigation}></Header>
      {navigation === 'MAP' &&
        <MainMap marker={marker} setMarker={setMarker}></MainMap>
      }
      {navigation === 'PLACE' &&
        <PlaceForm marker={marker} setMarker={setMarker}></PlaceForm>
      }
      {navigation === 'MEETING' &&
        <Meeting></Meeting>
      }
    </div>
    
  )
}

export default App