import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HalamanLogin from './components/HalamanLogin';
import Notifikasi from './components/Notifikasi';
import VerifikasiSeller from './components/VerifikasiSeller';
import Marketing from './components/Marketing';
import Voucher from './components/Voucher';

function App() {

  return (
    <BrowserRouter>
      <SideNav />
      {/* <Routes>
        <Route path="/" element={<HalamanLogin/>}/>
        <Route path="/dasboard" element={<SideNav/>}/>
        <Route path="/verifikasi" element={<VerifikasiSeller/>}/>
        <Route path='/adsbanner' element={<Marketing />} />
        <Route path='/voucher' element={<Voucher />} />
      </Routes> */}
    </BrowserRouter>
    // <SideNav />
    
  );
}

export default App;
