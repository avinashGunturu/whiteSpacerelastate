import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/about' exact element={<About />}/>
        </Routes>
      </BrowserRouter>
       {/* <Home /> */}
    </div>
  );
}

export default App;
