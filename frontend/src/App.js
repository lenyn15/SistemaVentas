import './App.css';
import Menu                               from "./menuOpciones/menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ComponenteCliente                  from "./ClienteComponent/ComponenteCliente";
import ListarClientes                     from "./ClienteComponent/ListarClientes";
import ListarTipos                        from "./ClienteComponent/ListarTipos";

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <div className="components">
                    <Route path="/component-clientes" exact component={ ComponenteCliente }/>
                    <Route path="/view-clientes" exact component={ ListarClientes }/>
                    <Route path="/view-tipos" exact component={ ListarTipos }/>
                </div>
            </Router>
        </div>
    );
}

export default App;