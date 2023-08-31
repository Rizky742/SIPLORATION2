import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Tentang from './pages/tentang';
import Produk from './pages/produk';
import Portofolio from './pages/portofolio';
import SignIn from './pages/signIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/> //Element = const, path = url = nav
        <Route path="/tentang" exact element={<Tentang/>}/>
        <Route path="/prospek" exact element={<Produk/>}/>
        {/* <Route path="/signIn" exact element={<SignIn/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
