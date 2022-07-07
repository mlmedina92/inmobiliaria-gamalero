import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import BotonSumar from './components/BotonSumar';



function App() {
  return (
    <>
    <header className="sticky-top">
      <NavBar/>
      <BotonSumar/>
    </header>
    <main>
      <Home/>
    </main>
    <footer>
    </footer>
    </>
    );
}

export default App;
