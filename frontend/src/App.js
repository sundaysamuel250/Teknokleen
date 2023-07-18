
import './App.css';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
     </Router>
     </>
  );
}

export default App;
