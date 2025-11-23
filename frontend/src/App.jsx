
import './App.css'
import Navbar from './navbar.jsx'
import Home from './Main_pages/Home.jsx';
import { AuroraBackground } from './components/ui/aurora-background.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Main_pages/About.jsx';
import Segments from './Main_pages/Segments.jsx';
import Activites from './Main_pages/Activites.jsx';
import OurGrossReach from './Main_pages/OurGrossReach.jsx';
import Gold from './Main_pages/Partners/Gold.jsx';
import Platinum from './Main_pages/Partners/Platinum.jsx';
import Premium from './Main_pages/Partners/Premium.jsx';
import Supporting from './Main_pages/Partners/Supporting.jsx';
import { DotBackground } from './components/ui/DotBackground.jsx';
import Footer from './Footer.jsx';
import Contact from './Main_pages/Contact.jsx';
function App() {
  return (
   <BrowserRouter>
    <DotBackground>
       <Navbar />
        <div className="relative  w-full pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activites/>} />
            <Route path="/partners/gold" element={<Gold/>} />
            <Route path="/partners/platinum" element={<Platinum/>} />
            <Route path="/partners/premier" element={<Premium/>} />
            <Route path="/partners/supporting" element={<Supporting/>} />
            <Route path="/segments" element={<Segments/>} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element ={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
    </DotBackground>
    </BrowserRouter>
  )
}

export default App;
