import './App.css';
import AxiosData from './components/Data';
import Header from './components/Header';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useDispatch } from "react-redux";
import { loadCartFromStorage } from '../src/slices/cartSlice';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFromStorage()); // Load cart from local storage on startup
  }, [dispatch]);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Router>
      {/* pass Search Handler */}
        <Header setSearchQuery={setSearchQuery}/>  
        <Routes>
          <Route path="/" element={<AxiosData searchQuery={searchQuery} />} />  // pass Search Handler
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
