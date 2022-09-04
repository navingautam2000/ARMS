import Home from  './Landingpage/home' 
import About from './Landingpage/about'
import Rescue from './Landingpage/rescue'
import Donate from './Landingpage/donate'
import Volunteer from './Landingpage/volunteer'
import Contact from './Landingpage/contact'
import Header from './Header'
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <switch>  
    <Routes>
   <Route path="/Home" element={<Home />} />
   <Route path="/About" element={<About />} />
   <Route path="/Rescue" element={<Rescue />} />
   <Route path="/Donate" element={<Donate />} />
   <Route path="/Volunteer" element={<Volunteer />} />
   <Route path="/Contact" element={<Contact />} />
   </Routes>
   </switch>
    </>
  );
}

export default App;
