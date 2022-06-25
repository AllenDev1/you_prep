import React from "react";
import Home from "./pages/home.jsx";
import Signup from "./pages/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact index element={<Home />} />
          <Route path="sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
