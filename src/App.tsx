import './App.css';
import NavBar from './components/NavBar';
import Albums from './pages/Albums';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>


      <NavBar />


      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>



    </Router>
  );
}

export default App;
