import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';

function AgregarTutoria(props){

    function guardarLibro(personalizada) {
      if (
        personalizada.id_tutoria >= 0 &&
        personalizada.usuario !== "" &&
        personalizada.nombre !== "" &&
        personalizada.apellido !== "" &&
        personalizada.clase !== "" &&
        personalizada.fecha !== "" &&
        personalizada.hora !== "" &&
        personalizada.docente !== ""
      ) {
        /* let listaGuardar = [];
        let lista = ls.get("misLibros2");
        if (lista && lista.length > 0) listaGuardar = lista;
        listaGuardar = listaGuardar.concat(libro);
        ls.set("misLibros2", listaGuardar);*/

        axios.post('https://localhost:44323/api/tutoriapersonalizada', personalizada)
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
        id_tutoria: "",
        usuario: "",
        nombre: "",
        apellido: "",
        clase: "",
        fecha: "",
        hora: "", 
        docente: ""
      },
      onSubmit: (values) => {
          console.log('Guardar');
          console.log(values);
          guardarLibro(values);
      },
    });

    return (
      <div>    
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
      </nav><nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
      </nav>
      <div className="col-sm-12 col-lg-6 offset-lg-3">
        <h1>Registra tu Tutoría</h1>     
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
     <div className="form-group">
           <label htmlFor="id_tutoria">Id Tutoría</label>
           <input
            type="number"
            className="form-control"
            id="id_tutoria"
            onChange={formik.handleChange}
            value={formik.values.id_tutoria}
          />
        </div>
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            onChange={formik.handleChange}
            value={formik.values.usuario}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            onChange={formik.handleChange}
            value={formik.values.apellido}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clase">Clase</label>
          <input
            type="text"
            className="form-control"
            id="clase"
            onChange={formik.handleChange}
            value={formik.values.clase}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            onChange={formik.handleChange}
            value={formik.values.fecha}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            className="form-control"
            id="hora"
            onChange={formik.handleChange}
            value={formik.values.hora}
          />
        </div>
        <div className="form-group">
          <label htmlFor="docente">Docente</label>
          <select className="form-control"  
          id="docente"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.docente}
          >
         <option >...</option>
         <option >Pedro Escamoso</option>
         <option >Rajel Gorgun</option>     
         <option >Reiniery Ayestas</option>
         <option >Jorge Carranza</option>
         <option >Mateo Lopez</option>
        </select>

        </div>         
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>&nbsp;&nbsp;<Link to='/Tutorias'><button className='btn btn-danger' >Regresar</button></Link>
      </form>
    </div>
    </div>
    );
}

export default AgregarTutoria;