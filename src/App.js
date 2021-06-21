import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/login'
import Inicio from './Inicio/Inicio'
import Tutorias from './Tutorias/tutorias'
import Cursos from './CursosDsiponibles/Cursos'
import Profesionales from './Profesionales/Profesionales'
import Contacto from './Contacto/Contacto'
import Registrarse from './Login/Registrarse'
import Inscrito from './MisCursos/inscrito'
import AgregarTutoria from './Tutorias/AgregarTutoria'
import RegistrarTutoria from './Tutorias/Registrar'
import RegistrarCurso from './CursosDsiponibles/RegistrarCurso'
import TutoriasInscritas from './MisCursos/TutoriasInscritas'
import PersonalizadasInscritas from './MisCursos/PersonalizadasInscritas'
import './css/estilos.css'


function App() {
  return (
    <Router>    

   
<Switch >
        <Route exact path="/" component={Login}/>
        <Route exact path="/Registrarse" component={Registrarse}/>
        <Route exact path="/Inicio" component={Inicio}/>
        <Route exact path="/Tutorias" component={Tutorias}/>
        <Route exact path="/Cursos" component={Cursos}/>
        <Route exact path="/Profesionales" component={Profesionales}/>
        <Route exact path="/Inscrito" component={Inscrito}/>
        <Route exact path="/Contacto" component={Contacto}/>
        <Route exact path="/AgregarTutoria" component={AgregarTutoria}/>
        <Route exact path="/RegistrarTutoria" component={RegistrarTutoria}/>
        <Route exact path="/RegistrarCurso" component={RegistrarCurso}/>
        <Route exact path="/TutoriasInscritas" component={TutoriasInscritas}/>
        <Route exact path="/PersonalizadasInscritas" component={PersonalizadasInscritas}/>
      </Switch>

</Router>
  );
}

export default App;
