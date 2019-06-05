import React from 'react';
import Header from './components/Header.js';
import Featured from './components/Featured.js';
import Movies from './components/Movies.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <Featured />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
