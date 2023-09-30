import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import { Blog } from "./pages/blog/Blog";
import { HygieneLanding } from "./pages/hygiene";
import { HygieneShop } from "./pages/hygine-shop";
import { School } from "./pages/school";

function App() {
  return (
    <>
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
  );
}

export default App;
