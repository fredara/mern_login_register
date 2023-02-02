import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


import Register from './pages/Register/Register'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
