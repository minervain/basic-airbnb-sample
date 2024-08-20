import Header from './comp/header/Header';
import MainP from './pages/mainp';
import Details from './pages/detail';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainP />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
