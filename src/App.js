import React from 'react';
import {ThemeProvider} from './context/ThemeConetext'
import Navbar from './components/Navbar';

function App() {
  return <ThemeProvider>
    <Navbar/>
  </ThemeProvider>
}

export default App;
