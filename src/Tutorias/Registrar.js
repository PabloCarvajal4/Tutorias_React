import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';

function Registrar(props){
    let tutorias = props.location.state; //recupera en props lo enviado con this.props.history.push('/EditarLibro',this.state.libros[indice]);
    if (!tutorias)
      props.history.goBack();

    function guardarLibro(tutorias) {
      if (
        tutorias.id_tutoria >= 0 &&
        tutorias.clase !== "" &&
        tutorias.hora !== "" &&
        tutorias.fecha !== "" &&
        tutorias.docente !== "" && 
        tutorias.usuario !== ""     
      ) {
        /* let listaGuardar = [];
        let lista = ls.get("misLibros2");
        if (lista && lista.length > 0) listaGuardar = lista;
        listaGuardar = listaGuardar.concat(libro);
        ls.set("misLibros2", listaGuardar);*/

        axios.post('https://localhost:44323/api/tutoriainscrita', tutorias)
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
        id_tutoria: tutorias.id_tutoria,  
        clase: tutorias.clase,
        hora: tutorias.hora,
        fecha: tutorias.fecha,
        docente: tutorias.docente,   
        usuario: ""
      },
      onSubmit: (values) => {
          console.log('Guardar');
          console.log(values);
          guardarLibro(values);
      },
    }
    );

    

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
      </nav><nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
      </nav>
      <div className="col-sm-12 col-lg-6 offset-lg-3">
     		<h1>Inscripción de Tutoría</h1>
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
          <label htmlFor="id_tutoria">Id_Tutoría</label>
          <input
            type="number"
            className="form-control"
            id="id_tutoria"
            onChange={formik.handleChange}
            value={formik.values.id_tutoria}
            disabled
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
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora</label>
          <input
            type="text"
            className="form-control"
            id="hora"
            onChange={formik.handleChange}
            value={formik.values.hora}
            disabled
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
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="docente">Docente</label>
          <input
            type="text"
            className="form-control"
            id="docente"
            onChange={formik.handleChange}
            value={formik.values.docente}
            disabled
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
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>&nbsp;&nbsp;<Link to='/Tutorias'><button className='btn btn-danger' >Regresar</button></Link>
      </form>
    </div></div>
    );
}

export default Registrar;