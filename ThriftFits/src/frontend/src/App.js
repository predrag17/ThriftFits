import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Login from "./components/LoginAndRegister/Login";
import About from "./components/About/About";
import Register from "./components/LoginAndRegister/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>

    );
}

export default App;
