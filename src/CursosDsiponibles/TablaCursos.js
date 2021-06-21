import React from 'react';
import Curso from './Curso'

function TablaCursos (props){
    const cursos = props.cursos;
    return (
    <div>
            <table class="table ">
            <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id_Cursos</th>
                        <th scope="col">Fecha de Inicio</th>
                        <th scope="col">Fecha de Finalización</th>
                        <th scope="col">Horario</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Registrar</th>
                    </tr>
                </thead>
                <tbody>          
                {cursos.map(
          (clase,index)=> <Curso indice={index+1} cursos={clase}  abrirRegistrarCurso={props.abrirRegistrarCurso} />)}
                <tr>
                    
                </tr>
                </tbody>
            </table>
    </div>);
}

export default TablaCursos;