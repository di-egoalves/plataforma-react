import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams } from "react-router-dom";

export function EditaUsuario() {

    // useParams é uma função que retorna um objeto.
    // Este objeto contêm os parametros passados pela rota
    let params = useParams();
    let id = params.id;

    let usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); // retorna valor booleano que satisfaza a pesquisa
    });

    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button variant="dark">Editar</Button>
        </div>
    )
}