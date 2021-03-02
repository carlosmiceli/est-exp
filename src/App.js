import SimpleReactLightbox from 'simple-react-lightbox'
import Nav from './components/nav'
import Hero from './components/hero'
import Cards from './components/cards'
import About from './components/about'
import Testimonials from './components/testimonials'
import Companies from './components/companies'
import Sell from './components/sell'
import Included from './components/included'
import Team from './components/team'
import ContactForm from './components/contact-form'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <Nav />
        <Hero />
        <Cards />
        <About />
        <Testimonials />
        <Companies />
        <Sell />
        <Included />
        <Team />
        <ContactForm />
        <Footer />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
