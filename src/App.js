import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Capstone from "./Components/Capstone/Capstone";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hackathons from "./Components/Hackathon/Hackathons";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Dummy from "./Dummy";

function App() {
  return (
    <BrowserRouter>
      {/* <div id="wrapper">
        <Navbar />
        <div id="content">
          <Sidebar />
          <div className="row"> */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/capstone" element={<Capstone />} />
              <Route path="/hackathon" element={<Hackathons />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/dummy" element={<Dummy />} />
            </Routes>
          {/* </div>
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
