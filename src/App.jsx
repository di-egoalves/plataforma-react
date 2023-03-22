import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Login } from './pages/Login/Login';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Section } from './components/Section/Section';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';

const sections = [
  {
      title: "Section 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit molestias ratione eos vitae adipisci alias fugiat doloribus dignissimos fuga. Quia beatae velit nihil vero voluptatum cumque id iste explicabo veniam?"
  },
  {
      title: "Section 2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus sit impedit quos ratione exercitationem praesentium quam tempore culpa, excepturi adipisci soluta officia quas deserunt eum ad tempora a aut."
  },
  {
      title: "Section 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ullam optio perferendis provident vel repudiandae obcaecati! Reiciendis aspernatur non sapiente suscipit fuga asperiores, eum molestiae illum sequi voluptates eius perspiciatis."
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 
            ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
            Exemplo: exemplo.com/usuarios/3245/perfil
            Area de "perfil" do usuário "3245" dentro da relação de "usuarios".
          */}
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />}>
              <Route path="1" element={<Section title={sections[0].title} description={sections[0].description} />} />
              <Route path="2" element={<Section title={sections[1].title} description={sections[1].description} />} />
              <Route path="3" element={<Section title={sections[2].title} description={sections[2].description} />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuario/edit/:id" element={<EditaUsuario />} />   {/* :id -> Parametro de rota */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
