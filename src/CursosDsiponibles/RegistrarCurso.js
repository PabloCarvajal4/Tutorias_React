import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';

function RegistrarCurso(props){
    let cursos = props.location.state; //recupera en props lo enviado con this.props.history.push('/EditarLibro',this.state.libros[indice]);
    if (!cursos)
      props.history.goBack();

    function guardarLibro(cursos) {
      if (
        cursos.id_cursos >= 0 &&
        cursos.fecha_Inicio !== "" &&
        cursos.fecha_final !== "" &&
        cursos.horario !== "" &&
        cursos.curso !== "" &&
        cursos.docente !== "" &&
        cursos.usuario !== ""   
      ) {
        /* let listaGuardar = [];
        let lista = ls.get("misLibros2");
        if (lista && lista.length > 0) listaGuardar = lista;
        listaGuardar = listaGuardar.concat(libro);
        ls.set("misLibros2", listaGuardar);*/

        axios.post('https://localhost:44323/api/cursoinscrito', cursos)
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
        id_cursos: cursos.id_cursos,  
        fecha_Inicio: cursos.fecha_Inicio,
        fecha_final: cursos.fecha_final,
        horario: cursos.horario,
        curso: cursos.curso,
        docente: cursos.docente,    
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
      <h1>Inscripción de Cursos</h1>
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
          <label htmlFor="id_cursos">Id_Cursos</label>
          <input
            type="number"
            className="form-control"
            id="id_cursos"
            onChange={formik.handleChange}
            value={formik.values.id_cursos}
            disabled
          />
        </div>
      <div className="form-group">
          <label htmlFor="Fecha_Inicio">Fecha de Inicio</label>
          <input
            type="date"
            className="form-control"
            id="Fecha_Inicio"
            onChange={formik.handleChange}
            value={formik.values.Fecha_Inicio}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="Fecha_final">Fecha final</label>
          <input
            type="date"
            className="form-control"
            id="Fecha_final"
            onChange={formik.handleChange}
            value={formik.values.Fecha_final}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="horario">Horario</label>
          <input
            type="time"
            className="form-control"
            id="horario"
            onChange={formik.handleChange}
            value={formik.values.horario}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="curso">Curso</label>
          <input
            type="text"
            className="form-control"
            id="curso"
            onChange={formik.handleChange}
            value={formik.values.curso}
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
        </button>&nbsp;&nbsp;<Link to='/Cursos'><button className='btn btn-danger' >Regresar</button></Link>
      </form>
    </div>
    </div>
    );
}

export default RegistrarCurso;