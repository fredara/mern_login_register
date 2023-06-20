import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import RegisterPage from './pages/RegisterPage/RegisterPage'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
