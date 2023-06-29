import React, { useState } from 'react';
import {ThemeProvider} from './context/ThemeConetext'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import axios from 'axios';


function App() {

  const [coins, setCoins] = useState([])

  return <ThemeProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/account' element={<Account/>} />
    </Routes>
  </ThemeProvider>
}

export default App;
