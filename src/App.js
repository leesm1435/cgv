import './App.css';
import './style/Reset.css';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </>
  );
}

export default App;