import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <ToastContainer></ToastContainer>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
