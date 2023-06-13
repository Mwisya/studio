import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components';
import { AboutUsPage, BookingPage, ContactUsPage, HomePage, StudioPage } from './pages';
import ServicesPage from './pages/ServicesPage';
import PreFooter from './components/prefooter/PreFooter'
import Weddings from './components/shoots/weddings/Weddings';
import Creative from './components/shoots/creative/Creative';
import WorkShop from './components/shoots/workshop/WorkShop';
import Family from './components/shoots/family/Family';
import Photography from './components/photography/Photography';
import VideoGraphy from './components/video/VideoGraphy';
import Live from './components/live/Live';
import Audio from './components/audio/Audio';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/studio' element={<StudioPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>

        <Route path='/photography' element={<Photography/>}/>
        <Route path='/videography' element={<VideoGraphy/>}/>
        <Route path='/live-stream' element={<Live/>}/>
        <Route path='/audio' element={<Audio/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>

        <Route path='/wedding' element={<Weddings/>}/>
        <Route path='/creative' element={<Creative/>}/>
        <Route path='/office' element={<WorkShop/>}/>
        <Route path='/family' element={<Family/>}/>
      </Routes>
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default App;
