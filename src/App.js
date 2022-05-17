import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Rentals from './pages/Rentals.js';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/rentals" element={<Rentals/>}>Rentals</Route>
    </Routes>
  );
}

export default App;