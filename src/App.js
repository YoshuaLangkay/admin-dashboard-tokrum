// import logo from './logo.svg';
// import './App.css';
import HalamanLogin from './components/HalamanLogin';
import UserBuyer from './pages/UserBuyer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dasboard from './components/Dasboard';
import SideNav from './components/SideNav';
import Colap from './components/Colap';



function App() {

  return (
    <>
    {/* <HalamanLogin/> */}
    <SideNav/>

    </>
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<HalamanLogin/>}/> */}
    //     <Route path="/" element={<SideNav/>} />
    //     {/* <Route path='/buyer' element={<UserBuyer/>} /> */}

    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
