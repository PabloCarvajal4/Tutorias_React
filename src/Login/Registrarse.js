import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
function Login(props) {
  function guardar(registro){
  if (
    registro.usuario !== "" &&
    registro.nombreCompleto !== "" &&
    registro.correo !== "" &&
    registro.contraseña !== "" 
    
  ) {
    /* let listaGuardar = [];
    let lista = ls.get("misLibros2");
    if (lista && lista.length > 0) listaGuardar = lista;
    listaGuardar = listaGuardar.concat(libro);
    ls.set("misLibros2", listaGuardar);*/

    axios.post('https://localhost:44323/api/agregarusuario', registro)
    .then(response =>{
      if (response.request.status === 201){
        window.alert("Agregado exitosamente");
        props.history.goBack(); //Regresa al main
      }
      else{
        window.alert("Error al agregar el libro");
      }
    })
    .catch(error => {
      console.log(error);
      window.alert("Error al agregar el libro");
    });
    
  } else {
    window.alert("Favor ingresar correctamente los datos");
  }
}

const formik = useFormik({
  initialValues: {
    usuario: "",
    nombreCompleto: "",
    correo: "",
    contraseña: ""
  },
  onSubmit: (values) => {
      console.log('Guardar');
      console.log(values);
      guardar(values);
  },
});
    return <div> 
         <header>
		<div >
			<div class="">Tutorías y Cursos</div>		
		</div>
	</header>
     
     <div class="contenedor">
     <form className='formulario' onSubmit={formik.handleSubmit}>
       <h1>Registrate</h1>
       <div class="contenedor">
     <div class="input-contenedor">
     <i class="bi bi-person-fill"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></i>
           <input
            type="text"
            className="user"
            id="usuario"
            placeholder='Usuario'
            onChange={formik.handleChange}
            value={formik.values.usuario}
          />
          
          </div>
          <div class="input-contenedor">
        <i class="bi bi-person-fill"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></i>    
          <input
            placeholder='Nombre'
            type="text"
            className="user"
            id="nombreCompleto"
            onChange={formik.handleChange}
            value={formik.values.nombreCompleto}
          />
        </div>
        <div class="input-contenedor">
        <i class="bi bi-envelope-fill"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg></i>
          <input
            placeholder='Correo'
            type="text"
            className="user"
            id="correo"
            onChange={formik.handleChange}
            value={formik.values.correo}
          />
        </div>
        <div class="input-contenedor">
        <i class="bi bi-key-fill"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></i>
          <input
            placeholder='Contraseña'
            type="text"
            className="user"
            id="contraseña"
            onChange={formik.handleChange}
            value={formik.values.contraseña}
          />
        </div>
       
        <button type="submit" className="button">
          Guardar
        </button>
        <br/><br/>
        <div className='text-center'>
        <Link to='/'><a class="link" href="">Volver al LogIn </a> </Link>
        </div>
        </div>
      </form>
       </div>
    </div>;
}
export default Login ;