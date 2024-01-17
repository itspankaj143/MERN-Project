import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Contact1 from "./components/Contact1";
// import Registeration from "./components/Registeration";

function App() {
  return (
    <>
      {/* <Registeration /> */}
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router> */}
      <Contact1 />
    </>
  );
}

export default App;
