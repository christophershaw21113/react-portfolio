import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Portfolio from './views/Portfolio';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='/home' element={<NavBar />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
