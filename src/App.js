import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import Hero from './components/Hero/Hero';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Formpurchase from './components/forms/purchaseform';
import Home from './components/Hero/Hero';
import LandingPage from './components/pages/LandingPage';
import Job from './components/pages/joboffer';
import Register from './components/pages/register';
import Courier from './components/pages/CourierService/signinsignup';
import Dashboard from './components/pages/dashboard';
import Delivery from './components/pages/CourierService/delivery';
import Password from './components/pages/password';



function App() {
  return (
    <div>
       <>
  <BrowserRouter>
       <Navbar/>         
       {/* <Hero/>   */}
       
       <Routes>
       <Route path="/" element={<LandingPage />} /> 

       <Route path="/purchaseform" element={<Formpurchase/>} /> 
       <Route path="/joboffer" element={<Job/>} /> 
       <Route path="/register" element={<Register/>} /> 
       <Route path="/signinsignup" element={<Courier/>} /> 
       <Route path="/dashboard" element={<Dashboard/>} /> 
       <Route path="/delivery" element={<Delivery/>} /> 
       <Route path="/signinsignup/password" element={<Password/>} /> 
     
       </Routes>  
</BrowserRouter> 

</>       
    </div>
    
  );
}

export default App;
