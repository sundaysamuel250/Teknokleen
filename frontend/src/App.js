<<<<<<< HEAD

import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Career from './pages/career/Career';
import { Blog } from './pages/blog/Blog';
import { HygieneLanding } from './pages/hygiene';
import Contact from './pages/contact/Contact';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import { Blog } from "./pages/blog/Blog";
import { HygieneLanding } from "./pages/hygiene";
import { HygieneShop } from "./pages/hygine-shop";
<<<<<<< HEAD
>>>>>>> origin/shop
=======
import { School } from "./pages/school";
>>>>>>> origin/school

function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='career' element={<Career />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        {/* hygiene */}
        <Route path='hygiene' >
          <Route path='' element={<HygieneLanding />} />
        </Route>
      </Routes>
     </Router>
     </>
=======
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="blog" element={<Blog />} />
          {/* hygiene */}
          <Route path="hygiene">
            <Route path="" element={<HygieneLanding />} />
          </Route>

          <Route path="hygiene-shop">
            <Route path="" element={<HygieneShop />} />
          </Route>

          <Route path="school">
            <Route path="" element={<School />} />
          </Route>
        </Routes>
      </Router>
    </>
>>>>>>> origin/shop
  );
}

export default App;
