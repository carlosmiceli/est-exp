import SimpleReactLightbox from 'simple-react-lightbox'
import Nav from './components/nav'
import Hero from './components/hero'
import Cards from './components/cards'
import About from './components/about'
import Companies from './components/companies'
import Team from './components/team'
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <Nav />
        <Hero />
        <Cards />
        <About />
        <Companies />
        <Team />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
