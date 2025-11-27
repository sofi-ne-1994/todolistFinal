import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import About from "./pages/About";


export default function App(){
  return(
      <BrowserRouter> 
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/crear">Crear</Link>
      <Link to="/sobre-mi">Sobre mi</Link>
    </nav>
    
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/crear" element={<CreateTask />}/>
      <Route path="/sobre-mi" element={<About />}/> 
    </Routes>

    <footer>
      <p className="footer">2025 Proyecto Final para PWA by Sofi</p>
    </footer>

  </BrowserRouter>
  );
}