import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact"
import { Blog } from "./pages/blog/Blog";
import { HygieneLanding } from "./pages/hygiene";
import { HygieneShop, HygieneShopPage } from "./pages/hygine-shop";
import { Courses, School } from "./pages/school";
import RegistrationForm from './pages/school/components/RegistrationForm';
import ScrollToTop from './components/ScrollToTop';
import { useContext } from 'react';
import { AppContext } from './state/context';
import HygieneShopCheckout from './pages/hygine-shop/checkout';


function App() {

  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register-form" element={<RegistrationForm />} />
          
          {/* hygiene */}
          <Route path="hygiene">
            <Route path="" element={<HygieneLanding />} />
          </Route>

          <Route path="hygiene-shop">
            <Route path="" element={<HygieneShop />} />
            <Route path=":category" element={<HygieneShopPage />} />
            <Route path='checkout' element={<HygieneShopCheckout />} />
            <Route path='checkout/:product'  element={<HygieneShopCheckout />} />
          </Route>

          <Route path="school">
            <Route path="" element={<School />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;