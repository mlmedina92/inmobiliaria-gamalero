import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FooterLinks from './components/FooterLinks';
import React from 'react';

function App() {
  return (
    <>
    <header className="sticky-top">
      <NavBar />
    </header>
    <main>
      <Home />
    </main>
    <footer>
      <FooterLinks />
    </footer> 
    </>
    );
}

export default App;
