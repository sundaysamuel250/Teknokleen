
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Career from './pages/career/Career';
import { Blog } from './pages/blog/Blog';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='career' element={<Career />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
     </Router>
     </>
  );
}

export default App;
