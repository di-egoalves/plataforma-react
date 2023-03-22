import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from "./components/Menu/Menu";
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Login } from './pages/Login/Login';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<NotFound />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
