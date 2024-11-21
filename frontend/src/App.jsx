import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Repodetails from "./pages/Repodetails";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/repodetails" element={<Repodetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
