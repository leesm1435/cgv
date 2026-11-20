import './App.css';
import Header from './layout/Header';
import './style/Reset.css';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import Footer from './layout/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <MainContent />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;