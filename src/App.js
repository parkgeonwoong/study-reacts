import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';


const App = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
