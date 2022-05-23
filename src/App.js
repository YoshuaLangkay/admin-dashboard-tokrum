
import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HalamanLogin from './components/HalamanLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HalamanLogin/>}/>
        <Route path="/dasboard" element={<SideNav/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
