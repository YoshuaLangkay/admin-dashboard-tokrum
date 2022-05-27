import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HalamanLogin from './components/HalamanLogin';
import Notifikasi from './components/Notifikasi';
import VerifikasiSeller from './components/VerifikasiSeller';
import Marketing from './components/Marketing';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HalamanLogin/>}/>
        <Route path="/dasboard" element={<SideNav/>}/>
        <Route path="/verifikasi" element={<VerifikasiSeller/>}/>
        <Route path='/marketing' element={<Marketing />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
