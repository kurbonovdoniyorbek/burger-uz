import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
