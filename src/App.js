import './App.css';
import './style/Reset.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Login from './components/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
        <Route path='/cgv/' element={<Main />} />
        <Route path='/login' element={<Login />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
