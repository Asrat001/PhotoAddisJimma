import Header from './componet/Header'
import Slider from './componet/slider/Slider';
 import Home from './componet/Home'
 import Footer from './componet/Footer';
 import Gallary from './componet/Gallary';
 import Service from './componet/Service';
 import Contacts from './Contacts';
 import Poppins from '@fontsource/poppins'
import './app.css'
function App() {
  return (
    <div className="App">
    <Header/>
      <Slider/>
      <Home/>
      <Service/>
      <Gallary/>
      <Contacts/>
      <Footer/>
      
      {/*
      <Gallary/>
      <Service/>
      <Contacts/>
      <Footer/>
  */}
    </div>
  );
}

export default App;
