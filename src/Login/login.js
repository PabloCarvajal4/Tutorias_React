import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import axios from 'axios';
import ls from 'local-storage';
import {useFormik} from 'formik';
import Cookies from 'universal-cookie';
import  {useState, useEffect} from 'react';

function Login(props){
 
  function IniciarSesion(user){
    if (
      user.usuario !== "" &&
      user.contraseña !== "" 
      
    ) {
      /* let listaGuardar = [];
      let lista = ls.get("misLibros2");
      if (lista && lista.length > 0) listaGuardar = lista;
      listaGuardar = listaGuardar.concat(libro);
      ls.set("misLibros2", listaGuardar);*/
  
      axios.post('https://localhost:44323/api/credencial', user)
      .then(response =>{
        if (response.request.status === 201){      
          window.alert("Bienvenido");
          props.history.push("/Inicio");
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
            contraseña: ""
          },
          onSubmit: (values) => {
              console.log('Guardar');
              console.log(values);
              IniciarSesion(values);
          },
        });
    return <div> 
      <header>
		<div >
			<div class="">Tutorías y Cursos</div>		
		</div>
	</header>
  
     <form class="formulario">
       <div className="text-center">
     <img src="img/logo.png"  alt="..." width="150px" height="150px" /></div>
    <h1>LogIn</h1>
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
            value={formik.values.usuario}
            onChange={ formik.handleChange }
          />
          
          </div>
         
          <div class="input-contenedor">
        <i class="bi bi-key-fill"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></i>
          <input
            placeholder='Contraseña'
            type="password"
            className="user"
            id="contraseña"
            value={formik.values.contraseña}
            onChange={ formik.handleChange }
          />
        </div>
         <div className="text-center">
         
          <Link to='/Inicio'> <button type="submit" className="button">
          Iniciar Sesión
        </button></Link>
        
         </div>
         <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
         <p>¿No tienes una cuenta? <a class="link" href="Registrarse">Registrate </a></p>
     </div>
    </form>
       
    </div>;
}
export default Login ;