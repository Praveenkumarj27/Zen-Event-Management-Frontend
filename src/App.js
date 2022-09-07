import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Capstone from "./Components/Capstone/Capstone";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hackathons from "./Components/Hackathon/Hackathons";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";



function App() {
  return (
   
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/capstone" element={<Capstone />} />
              <Route path="/hackathon" element={<Hackathons />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
