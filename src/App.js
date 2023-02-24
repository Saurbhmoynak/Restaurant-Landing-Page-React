import './App.css';
import Home from './componets/Home';
import About from './componets/About';
import Work from './componets/Work';
import Testimonial from './componets/Testimonial';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
