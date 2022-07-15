import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FooterLinks from './components/FooterLinks';

function App() {
  return (
    <>
    <header className="sticky-top">
    {/* defino componentes q van a ser parte del header */}
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
