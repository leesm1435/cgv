import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './style/Reset.css';
import MainContent from './components/MainContent';
import './style/MainContent.css'
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainContent />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

