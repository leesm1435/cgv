import './App.css';
import './style/Reset.css';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Icecon from './components/Icecon';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainContent />
        <Icecon />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
