
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Texts from './components/text';
import About from './components/about';
import Author from './components/author';
import Idea from './components/idea';
import Product from './components/product';
import Why from './components/why';
import Information from './components/information';
import Endingpics from './components/endingpics';
import Footer from './components/footer';
import Overlap from './components/overlap';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Texts />
      <About/>
      <Author />
      <Idea />
      <Product />
      <Why />
      <Information />
      <Overlap />
      <Footer />
      <Endingpics />
    </div>
  );
}

export default App;
