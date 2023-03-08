import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
